
// declare variables

const $ = document;
const buttonsCount = 9;
const btnContainer = byId('btns');
const testObj = [];
const btnIdPrefix = 'btn';
const buttons = [];

// declare button constructor 

function Button(label) { // button constructor
    
    const btnId = btnIdPrefix + label;

    const _self = this;

    this.button = newEl('button');

    this.initialize = function(btnId, btnCaption){

        this.button.id = btnId;

        this.button.innerHTML = btnCaption;

        testObj.push({ id: btnId, innerHTML: btnCaption  });
        
        return this.button;
    }

    this.button.appendToContainer = function(container) {

        buttons.push(_self);    

        container.appendChild(_self.button);

    }
    
    return this.initialize(btnId, label)
};


// declare functions

function newEl(element) { // create a new element shorthand

    return $.createElement(element);

}

function byId(id) { // get element by id shorthand

    return $.querySelector('#'+id);

}
 
function createSubjectElements(callback) {

    Array.from(Array(buttonsCount).keys()).forEach(n => {

        const newBtn = new Button(n + 1);

        newBtn.appendToContainer(btnContainer);

    });

    callback();
}

function loopElementsAndSwitch() {

    Array.from(btnContainer.childNodes).forEach(element => switchLabels(element));

}

function switchLabels(el) {

    switch (Number(el.innerHTML)) {
        case 1: updateLabel(4); break;
        case 2: updateLabel(1); break;
        case 3: updateLabel(2); break;
        case 4: updateLabel(7); break;
        case 5: updateLabel(5); break;
        case 6: updateLabel(3); break;
        case 7: updateLabel(8); break;
        case 8: updateLabel(9); break;
        case 9: updateLabel(6); break;
    }

    function updateLabel(newLabel) {

        testObj.find(entry => entry.id === el.id).innerHTML = newLabel;

        el.innerHTML = newLabel;

    }
}

function addEventListenerToButtonFive(callback) {

    btnContainer

        .children

        .item(4)

        .addEventListener('click', function (event) {

            console.log('event: ', event);
            console.log('buttons: ', buttons);
            loopElementsAndSwitch();
            callback();
            
        })
}

function runTests() {

    const testMsg = ({ id, innerHTML }) => `TEST FAIL: button ${id} should have innerHtml of ${innerHTML}`;

    console.log('TESTS VALUES');
    
    testObj.forEach(({ id, innerHTML }) => console.assert(byId(id).innerHTML == innerHTML, testMsg({ id, innerHTML })));

    console.log('TESTS COMPLETED');
}

// Run program

createSubjectElements(() => {
    addEventListenerToButtonFive(function () {
        runTests()
    })
})
