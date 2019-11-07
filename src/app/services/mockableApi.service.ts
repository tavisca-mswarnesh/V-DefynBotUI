import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DialogflowApiService } from "./dialogflowApi.service";
import { LocationApiService } from "./locationApi.service";
import { RestaurantApiService } from "./restaurant-api.service";
import { FoodOrderingService } from './food-ordering.service';
import { LauncherService } from './launcher.service';

@Injectable({
  providedIn: "root"
})
export class MockableApiService {
  constructor(
    private _http: HttpClient,
    private _dialogflowService: DialogflowApiService,
    private _locationService: LocationApiService,
    private _restaurantApiService: RestaurantApiService,
    private _foodOrderingService: FoodOrderingService,
    private _launcherService: LauncherService
  ) {}

  // Mockable.io URL for custom made Api for dialogflow key and api urls
  private _apiUrl = "http://demo8483055.mockable.io/dialogflowAuthKey";

  async GetResponse() {
    try {
      const data = await this._http.get(this._apiUrl).toPromise();
      this._dialogflowService.SetKey(data["key"]);
      this._dialogflowService.SetUrl(data["dialogflowApiUrl"]);
      this._locationService.SetURL(data["locationApiUrl"]);
      this._restaurantApiService.SetURL(
        data["restaurantApiUrl"],
        data["restaurantDetailsApiUrl"],
        data["restaurantBookingUrl"],
        data["restaurantPaymentUrl"],
        data["restaurantCancelUrl"]
      );
      this._launcherService.SetUrl(data["ApiBaseUrl"]);
      this._foodOrderingService.SetURL(data["ApiBaseUrl"]);
    } catch (err) {
      return await Promise.resolve();
    }
  }
}
