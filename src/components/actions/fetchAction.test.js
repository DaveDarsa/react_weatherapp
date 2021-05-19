import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { fetchAction } from "./fetchAction";
import { sortWeather } from "../../utils/sortWeather";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Fetches and sorts data correctly", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  test("Returns correct response", () => {
    //response here
    fetch.mockResponses(
      [
        JSON.stringify({
          list: [
            {
              dt: 1621425600,
              main: {
                temp: 283.12,
              },
              weather: [
                {
                  id: 500,
                  main: "Rain",
                  description: "light rain",
                  icon: "10d",
                },
              ],

              dt_txt: "2021-05-19 12:00:00",
            },
          ],
        }),
      ],
      [
        JSON.stringify({
          main: {
            temp: 283,
          },
        }),
      ]
    );
    //expected actions
    const expectedActions = [
      {
        type: "FETCH_FORECAST",
        payload: {
          dailyForecast: sortWeather([
            {
              dt: 1621425600,
              main: {
                temp: 283.12,
              },
              weather: [
                {
                  id: 500,
                  main: "Rain",
                  description: "light rain",
                  icon: "10d",
                },
              ],

              dt_txt: "2021-05-19 12:00:00",
            },
          ]),
          currentWeather: {
            main: {
              temp: 283,
            },
          },
        },
      },
    ];

    //store
    const store = mockStore({
      dailyForecast: { list: [] },
      currentWeather: {},
    });

    return store.dispatch(fetchAction()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
