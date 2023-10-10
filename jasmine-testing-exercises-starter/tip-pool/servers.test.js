describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  afterEach(function() {
    serverNameInput.value = '';
  });
});
describe("Servers Test Suite", function() {
  let serverNameInput, serverForm, serverTbody, allServers, serverId;

  // Before each test, set up the necessary elements and variables
  beforeEach(function () {
    // Create and initialize DOM elements
    serverNameInput = document.createElement('input');
    serverNameInput.id = 'serverName';

    serverForm = document.createElement('form');
    serverForm.id = 'serverForm';
    serverForm.addEventListener('submit', submitServerInfo);

    serverTbody = document.createElement('tbody');
    serverTbody.id = 'serverTable';
    document.body.appendChild(serverTbody);

    // Initialize variables
    allServers = {};
    serverId = 0;
  });

  // After each test, clean up the DOM elements
  afterEach(function() {
    serverNameInput.remove();
    serverForm.remove();
    serverTbody.remove();
  });

  it('should add a new server to allServers and update the table on submitServerInfo()', function () {
    // Arrange
    serverNameInput.value = 'Alice';

    // Act
    submitServerInfo();

    // Assert
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server1'].serverName).toEqual('Alice');
    expect(serverNameInput.value).toEqual(''); // Input should be cleared
    expect(serverTbody.childElementCount).toEqual(1); // Table should have one row
  });

  it('should update the server table when updateServerTable() is called', function () {
    // Arrange
    serverNameInput.value = 'Alice';
    submitServerInfo(); // Add a server

    // Act
    updateServerTable();

    // Assert
    expect(serverTbody.childElementCount).toEqual(1); // Table should have one row
    expect(serverTbody.querySelector('tr').getAttribute('id')).toEqual('server1'); // Row ID should match server ID
  });
});
