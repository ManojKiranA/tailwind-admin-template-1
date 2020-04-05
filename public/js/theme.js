new Chart(document.getElementById("conversionsChart"), {
  type: "bar",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
    ],
    datasets: [
      {
        label: "Revenue",
        backgroundColor: "#486EDB",
        hoverBackgroundColor: "#2e59d9",
        data: [1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500],
      },
    ],
  },
  options: {
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0,
      },
    },
    scales: {
      xAxes: [
        {
          time: {
            unit: "month",
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            maxTicksLimit: 6,
          },
          maxBarThickness: 15,
        },
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 5000,
            maxTicksLimit: 5,
            padding: 10,
            callback: function (value, index, values) {
              return (
                "$" +
                new Intl.NumberFormat("en-IN", {
                  maximumSignificantDigits: 3,
                }).format(value)
              );
            },
          },
          gridLines: {
            color: "rgb(234, 236, 244)",
            zeroLineColor: "rgb(234, 236, 244)",
            drawBorder: false,
            borderDash: [2],
            zeroLineBorderDash: [2],
          },
        },
      ],
    },
    legend: {
      display: false,
    },
  },
});

new Chart(document.getElementById("chartjs-7"), {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [1895, 3400, 60, 810],
        backgroundColor: ["#2e59d9", "#486EDB", "#2b6cb0", "#63b3ed"],
        label: "Dataset 1",
      },
    ],
    labels: ["CAMPAIGN SENT", "NEW LEADS", "DEALS", "DOWNLOADS"],
  },
  options: {
    responsive: true,
    legend: {
      position: "bottom",
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  },
});
