export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  getMarkerContent(): string;
}
export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(mapDivId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(mapDivId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
  addMarker(subject: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: subject.location.lat,
        lng: subject.location.lng,
      },
    });
    marker.addListener("click", (e) => {
      const infoWindow = new google.maps.InfoWindow({
        content: subject.getMarkerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
