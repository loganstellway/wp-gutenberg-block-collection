/**
 * External dependencies
 */
import React from "react";
import GoogleMapReact from "google-map-react";

/**
 * WordPress dependencies
 */
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
import { getRatio, getCenter, Marker, MapIcon } from "./utils";

/**
 * Marker interface
 */
interface MarkerInterface {
  description: string;
  address: string;
  lat: number;
  lng: number;
}

/**
 * Map edit
 */
class GoogleMapEdit extends Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      api: {},
      geocoder: false,
      timer: 0,
      timeout: 1000
    };

    this.setApi = this.setApi.bind(this);
    this.center = this.center.bind(this);
    this.zoom = this.zoom.bind(this);
    this.getGeocoder = this.getGeocoder.bind(this);
    this.geocode = this.geocode.bind(this);
    this.getCenterFromGeocoder = this.getCenterFromGeocoder.bind(this);
    this.updateMarker = this.updateMarker.bind(this);
    this.removeMarker = this.removeMarker.bind(this);
    this.addMarker = this.addMarker.bind(this);
  }

  // Set API
  setApi(api) {
    this.setState({ api });
  }

  // Update center
  center() {
    const { attributes } = this.props;
    const { map } = this.state.api;

    if (map && map.setCenter) {
      map.setCenter(getCenter(attributes));
    }
  }

  // Update zoom
  zoom() {
    const { attributes } = this.props;
    const { zoom } = attributes;
    const { map } = this.state.api;

    if (map && map.setZoom) {
      map.setZoom(zoom);
    }
  }

  // Get geocoder
  getGeocoder() {
    if (!this.state.geocoder) {
      const { maps } = this.state.api;

      if (maps && maps.Geocoder) {
        this.setState({ geocoder: new maps.Geocoder() });
      }
    }
    return this.state.geocoder;
  }

  // Geocode address
  geocode(address: string, callback: (results, status) => void) {
    if (address.trim() && this.getGeocoder()) {
      // Cancel previous request
      clearTimeout(this.state.timer);

      // Start new request
      this.setState({
        timer: setTimeout(() => {
          this.getGeocoder().geocode({ address }, callback);
        }, this.state.timeout)
      });
    }
  }

  // Get center from
  getCenterFromGeocoder(data) {
    let center = { lat: 0, lng: 0 };

    try {
      data.forEach(result => {
        const { geometry } = result;
        const { location } = geometry;
        const { lat, lng } = location;
        center = { lat: lat(), lng: lng() };
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
    const { markers } = attributes;
    setAttributes({
      markers: [].concat(markers, [
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
      markers
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
              onChange={(val: string) => setAttributes({ apiKey: val })}
            />
            <RangeControl
              label={__("Zoom")}
              value={zoom}
              min={1}
              max={20}
              onChange={(val: number) => {
                setAttributes({ zoom: val });
                this.zoom();
              }}
            />
            <TextControl
              label={__("Address")}
              value={address}
              onChange={(val: string) => {
                setAttributes({ address: val });

                this.geocode(val, (resp, status) => {
                  if (status == "OK") {
                    const { lat, lng } = this.getCenterFromGeocoder(resp);
                    setAttributes({ lat, lng });
                    this.center();
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
                    setAttributes({ lat: val });
                    this.center();
                  }}
                />
                <TextControl
                  label={<small>{__("Longitude")}</small>}
                  value={lng}
                  onChange={(val: string) => {
                    setAttributes({ lng: val });
                    this.center();
                  }}
                />
              </PanelRow>
            </BaseControl>
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
                  onChange={(val: string) => setAttributes({ minHeight: val })}
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
                <Fragment>
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

                      this.geocode(val, (resp, status) => {
                        if (status == "OK") {
                          const { lat, lng } = this.getCenterFromGeocoder(resp);

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
        {apiKey && (
          <div className={className}>
            <div
              style={{
                paddingTop: `${getRatio(x, y)}%`,
                minHeight: addMinHeight
                  ? `${minHeight}${minHeightUnit}`
                  : undefined
              }}
            />
            <div className="map-container">
              <GoogleMapReact
                bootstrapURLKeys={{ key: apiKey }}
                defaultCenter={getCenter(attributes)}
                defaultZoom={zoom}
                onGoogleApiLoaded={this.setApi}
              >
                {markers.map(
                  ({
                    lat,
                    lng,
                    description
                  }: {
                    lat: number;
                    lng: number;
                    description?: string;
                  }) => (
                    <Marker lat={lat} lng={lng} description={description} />
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
