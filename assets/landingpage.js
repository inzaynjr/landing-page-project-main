// class custompagecustomization extends HTMLElement {
//     constructor() {
//         super();
//         this.calculatevalues();
//         this.mmbutton();

//     }
//     calculatevalues() {
//         this.inButton = this.querySelector('.in_unit_label_ai');
//         this.bodyInput = document.querySelector('#bodyinput').value;
//         this.ascenderInput = document.querySelector('#ascenderinput').value;
//         this.descenderInput = document.querySelector('#descenderinput').value;
//         this.interlinearInput = document.querySelector('#interlinearspaceinput').value;

//         console.log(this.bodyInput);
//         console.log(this.ascenderInput);
//         console.log(this.descenderInput);
//         console.log(this.interlinearInput);

//         this.inButton.addEventListener('click', (e) => {
//             this.changeunit = document.querySelectorAll('.unit');
//             this.changeunit.forEach(span => {
//                 span.innerHTML = "INCH";
//             });

//         })


//     }
//     mmbutton() {
//         this.mmButton = this.querySelector('.mm_unit_label_ai');
//         this.mmButton.addEventListener('click', (e) => {
//             this.ascenderInput = document.querySelector('#ascenderinput').value;
//             this.newvalue = this.ascenderInput * 25.4;
//             console.log(this.newvalue);
//             this.ascenderInput.value = this.newvalue;
//             console.log(this.ascenderInput);
//             this.changeunit = document.querySelectorAll('.unit');

//             this.changeunit.forEach(span => {
//                 span.innerHTML = "mm";
//             });

//         })
//     }
// }

// customElements.define('custom-page-customization', custompagecustomization);

// class custompagecustomization extends HTMLElement {
//     constructor() {
//         super();
//         this.inButton = this.querySelector('.in_unit_label_ai');
//         this.mmButton = this.querySelector('.mm_unit_label_ai');
//         this.bodyInput = this.querySelector('#bodyinput');
//         this.ascenderInput = this.querySelector('#ascenderinput');
//         this.descenderInput = this.querySelector('#descenderinput');
//         this.interlinearInput = this.querySelector('#interlinearspaceinput');
//         this.unit = "INCH";
//         this.inButton.addEventListener('click', this.toInches.bind(this));
//         this.mmButton.addEventListener('click', this.toMillimeters.bind(this));
//     }

//     toInches() {
//         this.unit = "INCH";
//         this.bodyInput.value = this.bodyInput.value / 25.4;
//         this.ascenderInput.value = this.ascenderInput.value / 25.4;
//         this.descenderInput.value = this.descenderInput.value / 25.4;
//         this.interlinearInput.value = this.interlinearInput.value / 25.4;
//         document.querySelectorAll('.unit').forEach(span => {
//             span.innerHTML = "INCH";
//         });
//     }

//     toMillimeters() {
//         this.unit = "mm";
//         this.bodyInput.value = this.bodyInput.value * 25.4;
//         this.ascenderInput.value = this.ascenderInput.value * 25.4;
//         this.descenderInput.value = this.descenderInput.value * 25.4;
//         this.interlinearInput.value = this.interlinearInput.value * 25.4;
//         document.querySelectorAll('.unit').forEach(span => {
//             span.innerHTML = "mm";
//         });
//     }
// }

// customElements.define('custom-page-customization', custompagecustomization);
// class CustomPageCustomization extends HTMLElement {
//     constructor() {
//         super();
//         this.attachEvents();
//     }

//     attachEvents() {
//         this.inButton = this.querySelector('.in_unit_label_ai');
//         this.mmButton = this.querySelector('.mm_unit_label_ai');
//         this.inputs = this.querySelectorAll('input[type="number"]');
//         this.unitSpans = this.querySelectorAll('.unit');

//         this.inButton.addEventListener('click', this.convertToInches.bind(this));
//         this.mmButton.addEventListener('click', this.convertToMillimeters.bind(this));
//     }

//     convertToInches() {
//         this.inputs.forEach(input => {
//             input.value = input.value / 25.4;
//         });

//         this.unitSpans.forEach(span => {
//             span.innerHTML = 'INCH';
//         });
//     }

//     convertToMillimeters() {
//         this.inputs.forEach(input => {
//             input.value = input.value * 25.4;
//         });

//         this.unitSpans.forEach(span => {
//             span.innerHTML = 'mm';
//         });
//     }
// }

// customElements.define('custom-page-customization', CustomPageCustomization);
class custompagecustomization extends HTMLElement {
  constructor() {
    super();
    this.calculateValues();
    this.inButtonClick();
    this.mmButtonClick();
    this.showinputrangevalue();
    this.stylechange();
    this.degreechange();
  }
  stylechange() {
    this.inButton = this.querySelector('#unitin');
    this.inButton.addEventListener('click', (e) => {
      this.changestyle = document.querySelector('.in_unit_label_ai').style.background = 'none';
      this.changestyle = document.querySelector('.in_unit_label_ai').style.color = 'white';
      document.querySelector('.mm_unit_label_ai').style.background = '';
      document.querySelector('.mm_unit_label_ai').style.color = '';
    });

    this.mmButton = this.querySelector('#unitmm');
    this.mmButton.addEventListener('click', (e) => {
      this.changestyle = document.querySelector('.mm_unit_label_ai').style.background = 'none';
      this.changestyle = document.querySelector('.mm_unit_label_ai').style.color = 'white';
      document.querySelector('.in_unit_label_ai').style.background = '';
      document.querySelector('.in_unit_label_ai').style.color = '';
    });
    this.a4button = this.querySelector('.label_a4_ai');
    this.a4button.addEventListener('click', (e) => {
      this.querySelector('.label_a4_ai').style.background = 'none';
      this.querySelector('.label_a4_ai').style.color = 'white';
      document.querySelector('.label_a3_ai').style.background = '';
      document.querySelector('.label_a3_ai').style.color = '';
    });

    this.a3button = this.querySelector('.label_a3_ai');
    this.a3button.addEventListener('click', (e) => {
      this.querySelector('.label_a3_ai').style.background = 'none';
      this.querySelector('.label_a3_ai').style.color = 'white';
      document.querySelector('.label_a4_ai').style.background = '';
      this.querySelector('.label_a4_ai').style.color = '';


    });

    this.orientlandscape = this.querySelector('.Orient_landscape_label');
    this.orientlandscape.addEventListener('click', (e) => {
      this.querySelector('.Orient_landscape_label').style.background = 'none';
      document.querySelector('.Orient_portrait_label').style.background = '';

    });

    this.orienthorizontal = this.querySelector('.Orient_portrait_label');
    this.orienthorizontal.addEventListener('click', (e) => {
      this.querySelector('.Orient_portrait_label').style.background = 'none';
      document.querySelector('.Orient_landscape_label').style.background = '';

    });


  }
  calculateValues() {
    this.inButton = this.querySelector('#unitin');
    console.log(this.inButton);
    this.mmButton = this.querySelector('#unitmm');
    console.log(this.mmButton);
    this.bodyInput = document.querySelector('#bodyinput');
    this.ascenderInput = document.querySelector('#ascenderinput');
    this.descenderInput = document.querySelector('#descenderinput');
    this.interlinearInput = document.querySelector('#interlinearspaceinput');


  }

  inButtonClick() {
    this.inButton.addEventListener('click', (e) => {
      this.changeUnit = document.querySelectorAll('.unit');
      this.changeUnit.forEach(span => {
        span.innerHTML = "inch";
      });
      this.bodyInput.value = (this.bodyInput.value / 25.4).toFixed(2);
      this.ascenderInput.value = (this.ascenderInput.value / 25.4).toFixed(2);
      this.descenderInput.value = (this.descenderInput.value / 25.4).toFixed(2);
      this.interlinearInput.value = (this.interlinearInput.value / 25.4).toFixed(2);
      this.mmButton.removeAttribute("disabled");
      this.inButton.setAttribute("disabled", "true");
    });
  }

  mmButtonClick() {
    this.mmButton.addEventListener('click', (e) => {
      this.changeUnit = document.querySelectorAll('.unit');
      this.changeUnit.forEach(span => {
        span.innerHTML = "mm";
      });
      this.bodyInput.value = (this.bodyInput.value * 25.4).toFixed(0);
      this.ascenderInput.value = (this.ascenderInput.value * 25.4).toFixed(0);
      this.descenderInput.value = (this.descenderInput.value * 25.4).toFixed(0);
      this.interlinearInput.value = (this.interlinearInput.value * 25.4).toFixed(0);
      this.inButton.removeAttribute("disabled");
      this.mmButton.setAttribute("disabled", "true");
    });
  }
  showinputrangevalue() {
    this.rangeInput = document.querySelector('input[type="range"]');
    this.textInput = this.querySelector('.x_input_range_degree_text');
    this.rangeInput.addEventListener('input', () => {
      if (this.rangeInput.value === '25') {
        this.textInput.value = 'OFF';
      } else {
        this.textInput.value = this.rangeInput.value + ' degrees';
      }
    });
  }
  degreechange() {
    // const rangeSlider = document.querySelector(".xe_input_range_angle_slide");
    // const slantLines = document.querySelectorAll(".slantLine");
    // let previousRangeValue = rangeSlider.value;
    // rangeSlider.addEventListener("input", (e) => {
    //   const rangeValue = rangeSlider.value;
    //   let degree = (rangeValue) + previousRangeValue / 2;
    //   for (const slantLine of slantLines) {
    //     const pathData = slantLine.getAttribute("d").split(" ");
    //     pathData[4] = `${Number(pathData[4]) + degree}`;
    //     pathData[1] = `${Number(pathData[1]) - degree}`;
    //     slantLine.setAttribute("d", pathData.join(" "));
    //   }
    //   previousRangeValue = rangeValue;
    // });

    const rangeSlider = document.querySelector(".xe_input_range_angle_slide");
const slantLines = document.querySelectorAll(".slant_lines");
let previousRangeValue = rangeSlider.value;
rangeSlider.addEventListener("input", (e) => {
  const rangeValue = rangeSlider.value;
  let increment = (rangeValue - previousRangeValue) * 2;
  for (const slantLine of slantLines) {
    slantLine.setAttribute("x1", `${Number(slantLine.getAttribute("x1")) + increment}`);
    slantLine.setAttribute("x2", `${Number(slantLine.getAttribute("x2")) - increment}`);
  }
  previousRangeValue = rangeValue;
});










    // const rangeSlider = document.querySelector(".xe_input_range_angle_slide");
    // const slantLines = document.querySelectorAll(".slantLine");
    // console.log(slantLines);

    // rangeSlider.addEventListener("input", (e) => {
    //   for (const slantLine of slantLines) {
    //     const pathData = slantLine.getAttribute("d").split(" ");
    //      let degree = 30;
    //     // pathData[1] = `${Number(pathData[1])+degree}`
    //     pathData[4] = `${Number(pathData[4])+degree}`
    //     slantLine.setAttribute("d", pathData.join(" "));

    // pathData.replace(`${pathData[4],Number(pathData[4]+20)}`)
    // console.log(pathData);
    // let newpath = pathData[4]+20 ;
    // pathData[4] = "";
    // slantLine.setAttribute("d", pathData.join(" "));
  }
  //     const angle = e.target.value;
  //     console.log(angle);

  //     slantLines.forEach((slantLine) => {
  //         const newatt = slantLine.getAttribute('d');
  //         console.log(newatt);
  //         slantLine.setAttribute("d", `M {} {} L 2000 0 `);

  //     });



}




customElements.define('custom-page-customization', custompagecustomization);
