/**
 * External dependencies
 */
import React from "react";
import GoogleMapReact, { MapOptions, Coords } from "google-map-react";
import {
  GoogleMapsClient,
  createClient,
  GeocodingRequest,
  GeocodingResponse,
  ResponseCallback,
  GeocodingResult
} from "@google/maps";

/**
 * WordPress dependencies
 */
import { BlockEditProps } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { Component, Fragment } from "@wordpress/element";
import { InspectorControls } from "@wordpress/editor";
import {
  PanelBody,
  PanelRow,
  BaseControl,
  TextControl,
  TextareaControl,
  Button,
  RangeControl,
  Placeholder,
  ToggleControl,
  SelectControl
} from "@wordpress/components";

/**
 * Internal dependencies
 */
import { getRatio } from "../aspect-ratio/utils";
import {
  getCenter,
  Marker,
  MarkerInterface,
  MapIcon,
  GoogleMapsAttributes
} from "./utils";

/**
 * State interface
 */
interface State extends Coords {
  mapClient: GoogleMapsClient;
  geocoder?: {};
  timer?: ReturnType<typeof setTimeout>;
  timeout: number;
  zoom: number;
}

/**
 * Map edit
 */
class GoogleMapEdit extends Component {
  // Did mount
  didMount: boolean = false;

  // Props
  props: BlockEditProps<GoogleMapsAttributes>;

  // State
  state: State = {
    mapClient: createClient({ key: this.props.attributes.apiKey }),
    geocoder: false,
    timeout: 1000,
    lat: this.props.attributes.lat,
    lng: this.props.attributes.lng,
    zoom: this.props.attributes.zoom
  };

  // Constructor
  constructor(props: BlockEditProps<GoogleMapsAttributes>) {
    super(props);

    this.setComponentState = this.setComponentState.bind(this);
    this.geocode = this.geocode.bind(this);
    this.getCenterFromGeocoder = this.getCenterFromGeocoder.bind(this);
    this.updateMarker = this.updateMarker.bind(this);
    this.removeMarker = this.removeMarker.bind(this);
    this.addMarker = this.addMarker.bind(this);
  }

  // Component did mount
  componentDidMount() {
    this.didMount = true;
  }

  // Set component state
  setComponentState(data: Partial<State>) {
    if (this.didMount) {
      this.setState(data);
    } else {
      this.state = {
        ...this.state,
        ...data
      };
    }
  }

  // Set map options
  setMapOptions(updates: Partial<MapOptions>) {
    const { attributes, setAttributes } = this.props;
    const update = {
      ...attributes.mapOptions,
      ...updates
    };

    setAttributes({ mapOptions: update });
  }

  // Geocode address
  geocode(
    request: GeocodingRequest,
    callback: ResponseCallback<GeocodingResponse>
  ) {
    if (this.props.attributes.apiKey) {
      // Cancel previous request
      clearTimeout(this.state.timer);

      // Start new request
      this.setComponentState({
        timer: setTimeout(() => {
          this.state.mapClient.geocode(request, callback);
        }, this.state.timeout)
      });
    }
  }

  // Get center from
  getCenterFromGeocoder(data: GeocodingResult[]) {
    let center = { lat: 0, lng: 0 };

    try {
      data.forEach(result => {
        const { geometry } = result;
        const { location } = geometry;
        const { lat, lng } = location;
        center = { lat: lat, lng: lng };
      });
    } catch (error) {}

    return center;
  }

  // Update marker
  updateMarker(update: MarkerInterface, index: number) {
    const { attributes, setAttributes } = this.props;
    const { markers } = attributes;

    if (typeof markers[index] != "undefined") {
      setAttributes({
        markers: markers.map((marker: MarkerInterface, i: number) =>
          i == index ? update : marker
        )
      });
    }
  }

  // Remove marker
  removeMarker(index: number) {
    const { attributes, setAttributes } = this.props;
    const { markers } = attributes;

    if (typeof markers[index]) {
      setAttributes({
        markers: markers.filter(
          (marker: MarkerInterface, i: number) => index != i
        )
      });
    }
  }

  // Add marker
  addMarker() {
    const { attributes, setAttributes } = this.props;
    setAttributes({
      markers: [].concat(attributes.markers, [
        { lat: 0, lng: 0, description: "", address: "" }
      ])
    });
  }

  // Render component
  render() {
    // Props
    const { attributes, setAttributes, className } = this.props;

    // Attributes
    const {
      apiKey,
      address,
      zoom,
      x,
      y,
      minHeight,
      addMinHeight,
      minHeightUnit,
      lat,
      lng,
      markers,
      mapOptions
    } = attributes;

    // Edit
    return (
      <Fragment>
        <InspectorControls>
          <PanelBody
            className="editor-panel-map-settings"
            title={__("Map")}
            initialOpen={false}
          >
            <TextControl
              label={__("API Key")}
              value={apiKey}
              onChange={(val: string) => {
                setAttributes({ apiKey: val });
                this.setComponentState({
                  mapClient: createClient({ key: val })
                });
              }}
            />
            <TextControl
              label={__("Address")}
              value={address}
              onChange={(val: string) => {
                setAttributes({ address: val });

                this.geocode({ address: val }, (error, resp) => {
                  if (!error) {
                    const { lat, lng } = this.getCenterFromGeocoder(
                      resp.json.results
                    );
                    setAttributes({ lat, lng });
                    this.setComponentState({ lat, lng });
                  }
                });
              }}
            />
            <BaseControl id="map-coordinates" label={__("Coordinates")}>
              <PanelRow>
                <TextControl
                  label={<small>{__("Latitude")}</small>}
                  value={lat}
                  onChange={(val: string) => {
                    setAttributes({ lat: parseFloat(val) });
                    this.setComponentState({ lat: parseFloat(val) });
                  }}
                />
                <TextControl
                  label={<small>{__("Longitude")}</small>}
                  value={lng}
                  onChange={(val: string) => {
                    setAttributes({ lng: parseFloat(val) });
                    this.setComponentState({ lng: parseFloat(val) });
                  }}
                />
              </PanelRow>
            </BaseControl>
            <RangeControl
              label={__("Zoom")}
              value={zoom}
              min={1}
              max={20}
              onChange={(val: number) => {
                setAttributes({ zoom: val });
                this.setComponentState({ zoom: val });
              }}
            />
            <ToggleControl
              label={__("Fullscreen Control")}
              checked={mapOptions.fullscreenControl}
              onChange={(val: boolean) =>
                this.setMapOptions({ fullscreenControl: val })
              }
            />
            <ToggleControl
              label={__("Map Type Control")}
              checked={mapOptions.mapTypeControl}
              onChange={(val: boolean) =>
                this.setMapOptions({ mapTypeControl: val })
              }
            />
            <ToggleControl
              label={__("Street View Control")}
              checked={mapOptions.streetViewControl}
              onChange={(val: boolean) =>
                this.setMapOptions({ streetViewControl: val })
              }
            />
            <ToggleControl
              label={__("Zoom Control")}
              checked={mapOptions.zoomControl}
              onChange={(val: boolean) =>
                this.setMapOptions({ zoomControl: val })
              }
            />
            <SelectControl
              label={__("Map Type")}
              value={mapOptions.mapTypeId}
              onChange={(val: string) => this.setMapOptions({ mapTypeId: val })}
              options={[
                { value: "roadmap", label: "Road Map" },
                { value: "satellite", label: "Satellite" }
              ]}
            />
            <TextareaControl
              label={__("Styles")}
              help={
                <p>
                  Refer to{" "}
                  <a
                    href="https://snazzymaps.com/"
                    ref="noopener noreferrer"
                    target="_blank"
                  >
                    SnazzyMaps
                  </a>{" "}
                  for a library of styles.
                </p>
              }
              value={JSON.stringify(mapOptions.styles)}
              onChange={(val: string) =>
                this.setMapOptions({ styles: JSON.parse(val) })
              }
            />
          </PanelBody>
          <PanelBody
            className="editor-panel-map-settings"
            title={__("Dimensions")}
            initialOpen={false}
          >
            <BaseControl id="ratio" label={__("Ratio")}>
              <PanelRow>
                <TextControl
                  label={<small>{__("X")}</small>}
                  type="number"
                  value={x}
                  onChange={(val: string) =>
                    setAttributes({ x: parseFloat(val) })
                  }
                />
                <TextControl
                  label={<small>{__("Y")}</small>}
                  type="number"
                  value={y}
                  onChange={(val: string) =>
                    setAttributes({ y: parseFloat(val) })
                  }
                />
              </PanelRow>
            </BaseControl>
            <ToggleControl
              label={__("Add Minimum Height")}
              checked={addMinHeight}
              onChange={(val: boolean) => setAttributes({ addMinHeight: val })}
            />
            {addMinHeight && (
              <PanelRow>
                <TextControl
                  type="number"
                  value={minHeight}
                  onChange={(val: string) =>
                    setAttributes({ minHeight: parseFloat(val) })
                  }
                />
                <SelectControl
                  value={minHeightUnit}
                  onChange={(val: string) =>
                    setAttributes({ minHeightUnit: val })
                  }
                  options={[
                    { value: "cm", label: "cm" },
                    { value: "em", label: "em" },
                    { value: "in", label: "in" },
                    { value: "mm", label: "mm" },
                    { value: "pc", label: "pc" },
                    { value: "pt", label: "pt" },
                    { value: "px", label: "px" },
                    { value: "rem", label: "rem" },
                    { value: "vh", label: "vh" },
                    { value: "vw", label: "vw" }
                  ]}
                />
              </PanelRow>
            )}
          </PanelBody>
          <PanelBody
            className="editor-panel-map-settings"
            title={__("Markers")}
            initialOpen={false}
          >
            {markers.map((marker: MarkerInterface, index: number) => {
              const { description, address, lat, lng } = marker;

              return (
                <Fragment key={index}>
                  <div style={{ textAlign: "right" }}>
                    <Button
                      isSmall
                      isDefault={false}
                      isDestructive={true}
                      style={{ alignSelf: "end" }}
                      onClick={() => this.removeMarker(index)}
                    >
                      {__("Remove") + ` #${index + 1}`}
                    </Button>
                  </div>
                  <TextareaControl
                    label={__("Description")}
                    value={description}
                    className="mb-0"
                    rows={2}
                    onChange={(val: string) =>
                      this.updateMarker(
                        {
                          description: val,
                          address,
                          lat,
                          lng
                        },
                        index
                      )
                    }
                  />
                  <TextControl
                    label={__("Address")}
                    value={address}
                    className="mb-0"
                    onChange={(val: string) => {
                      this.updateMarker(
                        {
                          description,
                          address: val,
                          lat,
                          lng
                        },
                        index
                      );

                      this.geocode({ address: val }, (error, resp) => {
                        if (!error) {
                          const { lat, lng } = this.getCenterFromGeocoder(
                            resp.json.results
                          );

                          this.updateMarker(
                            {
                              description,
                              address: val,
                              lat: lat,
                              lng: lng
                            },
                            index
                          );
                        }
                      });
                    }}
                  />
                  <BaseControl
                    id="marker-coordinates"
                    className="mb-0"
                    label={__("Coordinates")}
                  >
                    <PanelRow>
                      <TextControl
                        label={<small>{__("Latitude")}</small>}
                        value={lat}
                        onChange={(val: string) =>
                          this.updateMarker(
                            {
                              description,
                              address,
                              lat: parseFloat(val),
                              lng
                            },
                            index
                          )
                        }
                      />
                      <TextControl
                        label={<small>{__("Longitude")}</small>}
                        value={lng}
                        onChange={(val: string) =>
                          this.updateMarker(
                            {
                              description,
                              address,
                              lat,
                              lng: parseFloat(val)
                            },
                            index
                          )
                        }
                      />
                    </PanelRow>
                  </BaseControl>
                  <hr />
                </Fragment>
              );
            })}
            <Button isSmall isPrimary onClick={this.addMarker}>
              {__("Add Marker")}
            </Button>
          </PanelBody>
        </InspectorControls>
        {!apiKey && (
          <Placeholder
            icon={MapIcon}
            label={__("Add API Key in block settings.")}
          />
        )}
        {apiKey && (lat == 0 && lng == 0) && (
          <Placeholder
            icon={MapIcon}
            label={__("Add location data in block settings.")}
          />
        )}
        {apiKey && !(lat == 0 && lng == 0) && (
          <div className={`${className} loganstellway-aspect-ratio-container`}>
            <div
              style={{
                paddingTop: `${getRatio(x, y)}%`,
                minHeight: addMinHeight
                  ? `${minHeight}${minHeightUnit}`
                  : undefined
              }}
            />
            <div className="loganstellway-aspect-ratio-content">
              <GoogleMapReact
                bootstrapURLKeys={{ key: apiKey }}
                center={getCenter(this.state)}
                zoom={this.state.zoom}
                options={mapOptions}
              >
                {markers.map(
                  (
                    { lat, lng, description }: MarkerInterface,
                    index: number
                  ) => (
                    <Marker
                      key={index}
                      lat={lat}
                      lng={lng}
                      description={description || undefined}
                    />
                  )
                )}
              </GoogleMapReact>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

/**
 * Export
 */
export default GoogleMapEdit;
