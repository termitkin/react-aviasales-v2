import React from "react";
import { create, act } from "react-test-renderer";
import Ticket from "./index";

describe("Ticket component", () => {
  let wrapper;

  afterAll(() => {
    wrapper.unmount();
  });

  it("Matches the snapshot", () => {
    act(() => {
      wrapper = create(
        <Ticket
          ticket={[
            {
              carrier: "TG",
              price: 15005,
              segments: [
                {
                  date: "2019-10-11T06:51:00.000Z",
                  destination: "HKT",
                  duration: 1557,
                  origin: "MOW",
                  stops: []
                },
                {
                  date: "2019-10-31T11:39:00.000Z",
                  destination: "HKT",
                  duration: 752,
                  origin: "MOW",
                  stops: ["BKK", "AUH", "HKG"]
                }
              ]
            }
          ]}
          currentCurrency={"rub"}
          currencyRates={{
            eur: 70.7557,
            usd: 64.9790614381
          }}
        />
      );
    });
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it("Matches the snapshot 2", () => {
    act(() => {
      wrapper = create(
        <Ticket
          ticket={[
            {
              carrier: "TG",
              price: 25000,
              segments: [
                {
                  date: "2019-10-11T06:51:00.000Z",
                  destination: "HKT",
                  duration: 1557,
                  origin: "MOW",
                  stops: []
                },
                {
                  date: "2019-10-31T11:39:00.000Z",
                  destination: "HKT",
                  duration: 752,
                  origin: "MOW",
                  stops: ["BKK", "AUH", "HKG"]
                }
              ]
            }
          ]}
          currentCurrency={"eur"}
          currencyRates={{
            eur: 51,
            usd: 63
          }}
        />
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
