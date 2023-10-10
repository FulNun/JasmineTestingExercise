describe("submitPaymentInfo", function() {
    it("should add a new payment to allPayments and update tables", function() {
      // Arrange: Mock input values and required elements
      billAmtInput.value = '50';
      tipAmtInput.value = '10';
      paymentId = 0;
      allPayments = {};
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
  
      // Act: Call submitPaymentInfo
      submitPaymentInfo();
  
      // Assert: Check if payment was added, tables updated, and inputs reset
      expect(Object.keys(allPayments).length).toEqual(1);
      expect(paymentTbody.childElementCount).toEqual(1);
      expect(summaryTds[0].textContent).toEqual('$50');
      expect(summaryTds[1].textContent).toEqual('$10');
      expect(billAmtInput.value).toEqual('');
      expect(tipAmtInput.value).toEqual('');
    });
  
    it("should not add a new payment with invalid input", function() {
      // Arrange: Mock input values and required elements for invalid input
  
      // Act: Call submitPaymentInfo
  
      // Assert: Check if payment was not added and tables/input were not updated
    });
  
    // Add more test cases to cover other scenarios
  });
  describe("createCurPayment", function() {
    it("should create a valid payment object with positive billAmt and tipAmt", function() {
      // Arrange: Mock valid input values
  
      // Act: Call createCurPayment
  
      // Assert: Check if a valid payment object is created
    });
  
    it("should return undefined with empty or negative billAmt", function() {
      // Arrange: Mock empty or negative billAmt values
  
      // Act: Call createCurPayment
  
      // Assert: Check if it returns undefined
    });
  
    // Add more test cases to cover other scenarios
  });
  describe("appendPaymentTable", function() {
    it("should append a new row to the payment table with payment details", function() {
      // Arrange: Create a mock 'tr' element and payment object
  
      // Act: Call appendPaymentTable
  
      // Assert: Check if a new row with payment details is appended to the table
    });
  
    // Add more test cases to cover other scenarios
  });
  describe("updateSummary", function() {
    it("should update summary table with correct values", function() {
      // Arrange: Mock payment data
  
      // Act: Call updateSummary
  
      // Assert: Check if summary table is updated with correct values
    });
  
    it("should handle cases with no payments and zero values", function() {
      // Arrange: Set paymentTotal and numberOfPayments to 0
  
      // Act: Call updateSummary
  
      // Assert: Check if summary table shows appropriate values
    });
  
    // Add more test cases to cover other scenarios
  });
  