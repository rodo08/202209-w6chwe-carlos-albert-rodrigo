import { renderHook } from "@testing-library/react";
import { store } from "../app/store";
import makeWrapper from "../mocks/mockWrapper";
import useApi from "./useApi";

const dispatchSpyOn = jest.spyOn(store, "dispatch");

describe("Given a useApi hook", () => {
  describe("When its method 'getAllRobots' is invoked", () => {
    test("Then it should call dispatch's loadRobotsActionCreator with a list of robots", async () => {
      const { result } = renderHook(() => useApi(), {
        wrapper: makeWrapper,
      });

      await result.current.getAllRobots();

      expect(dispatchSpyOn).toHaveBeenCalled();
    });
  });
});
