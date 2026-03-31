/**
 * Unit Test: API handlers
 * Pattern: Mocking / Stubbing
 *
 * Instead of making real HTTP requests, we create mock (stub) objects
 * for Express's `req` and `res` parameters. This isolates the unit
 * under test (the handler function) from the framework and network,
 * letting us verify behaviour quickly and deterministically..
 *
 * Contributed by: Josue Raudales
 */

const api = require("../backend/api");
const events = require("../backend/events");

describe("API handlers (Mocking / Stubbing Pattern)", () => {
  test("api.events should respond with the full events array", () => {
    // Arrange – create a stub response object with a mock json method
    const req = {};
    const res = { json: jest.fn() };

    // Act
    api.events(req, res);

    // Assert – res.json was called exactly once with the events data
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(events);
  });

  test("api.events response should contain at least one event", () => {
    // Arrange
    const req = {};
    const res = { json: jest.fn() };

    // Act
    api.events(req, res);

    // Assert
    const returnedData = res.json.mock.calls[0][0];
    expect(returnedData.length).toBeGreaterThan(0);
  });

  test("each event returned by api.events should have an id and title", () => {
    // Arrange
    const req = {};
    const res = { json: jest.fn() };

    // Act
    api.events(req, res);

    // Assert
    const returnedData = res.json.mock.calls[0][0];
    returnedData.forEach((event) => {
      expect(event).toHaveProperty("id");
      expect(event).toHaveProperty("title");
    });
  });
});
