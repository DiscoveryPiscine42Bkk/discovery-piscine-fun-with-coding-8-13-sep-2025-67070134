function calculate() {
      let left = $("#left").val().trim();
      let right = $("#right").val().trim();
      let op = $("#operator").val();

      if (!/^\d+$/.test(left) || !/^\d+$/.test(right)) {
        alert("Error :(");
        return;
      }

      left = parseInt(left, 10);
      right = parseInt(right, 10);

      if ((op === "/" || op === "%") && right === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
      }

      let result;
      switch (op) {
        case "+": result = left + right; break;
        case "-": result = left - right; break;
        case "*": result = left * right; break;
        case "/": result = left / right; break;
        case "%": result = left % right; break;
      }

      alert(result);
      console.log(result);
    }

    $(document).ready(function() {
      $("#calc").click(function() {
        calculate();
      });

      setInterval(function() {
        alert("Please, use me...");
      }, 30000);
    });