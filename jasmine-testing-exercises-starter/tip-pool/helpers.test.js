describe("sumPaymentTotal", function() {
    it("should return the sum of all payment values of the specified type", function() {
      // Arrange: Create a mock 'allPayments' object
      const allPayments = {
        payment1: { tipAmt: 10, billAmt: 50 },
        payment2: { tipAmt: 15, billAmt: 75 },
        payment3: { tipAmt: 20, billAmt: 100 },
      };
  
      // Act: Call sumPaymentTotal with 'tipAmt' type
      const totalTipAmt = sumPaymentTotal('tipAmt');
  
      // Assert: Expect the total tip amount to be 45 (10 + 15 + 20)
      expect(totalTipAmt).toEqual(45);
    });
  
    // Add more test cases to cover other scenarios
  });

  describe("calculateTipPercent", function() {
    it("should calculate the tip percent correctly", function() {
      // Arrange: Define billAmt and tipAmt values
      const billAmt = 50;
      const tipAmt = 10;
  
      // Act: Call calculateTipPercent
      const tipPercent = calculateTipPercent(billAmt, tipAmt);
  
      // Assert: Expect the tip percent to be 20 (10 / 50 * 100)
      expect(tipPercent).toEqual(20);
    });
  
    // Add more test cases to cover other scenarios
  });

  describe("appendTd", function() {
    it("should append a new 'td' element with the specified value to the given 'tr' element", function() {
      // Arrange: Create a mock 'tr' element
      const tr = document.createElement('tr');
  
      // Act: Call appendTd with a value
      appendTd(tr, 'TestValue');
  
      // Assert: Expect the 'tr' element to have a 'td' child element with the text 'TestValue'
      const tdElement = tr.querySelector('td');
      expect(tdElement).toBeDefined();
      expect(tdElement.textContent).toEqual('TestValue');
    });
  
    // Add more test cases to cover other scenarios
  });
  