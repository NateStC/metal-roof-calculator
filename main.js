var panelColor = document.querySelector('#panelColor');
var trimColor = document.querySelector('#trimColor');
var isRidgeVented = document.querySelector('#ventedRidge');
var overShingles = document.querySelector('#overShingles');
var furringStrips = document.getElementById('furringStrips');
var addUnderlayment = document.querySelector('#addUnderlayment');
const underlayBox = document.getElementById('underlayBox');
var measures = document.querySelectorAll('.measures');
var panelPriceLabel = document.getElementById('panelPriceLabel');
var panelSqPriceLabel = document.getElementById("panelSqPriceLabel");
var panelTypeRadio = document.getElementsByName('panelTypeRadio');

const colorsHrStandard = ['Forest Green', 'Burnished Slate', 'Charcoal Gray', 'Cocoa Brown', 'Burgundy',
    'Rustic Red', 'Dark Red', 'Gallery Blue', 'Hawaiian Blue', 'Black', 'White', 'Clay', 'Tan', 'Light Stone']
const colorsHrPremium = ['Copper Penny'];

const colors26gaStandard = ["Evergreen", "Hartford Green", "Shiny Black", "Charcoal Gray", "Burgundy",
    "Rustic Red", "Burnished Slate", "Cocoa Brown"]
const colors26gaPremium = ["Matte Black", "Bright White", "White", "Ivory", "Stone", "Tan", "Clay",
    "Light Gray", "Gallery Blue", "Hawaiian Blue", "Dark Red"]
const rivetColors = ['Unpainted/Mill Finish', 'Forest Green', 'Hartford Green', 'Charcoal Gray',
    'Burnished Slate', 'Cocoa Brown', 'Burgundy', 'Light Stone', 'Light Gray', 'Tan', 'Crimson Red',
    'Rustic Red', 'White', 'Gallery Blue', 'Hawaiian Blue', 'Black', 'Copper Penny', 'Clay']

const bootColors = ["Green", "Brown", "Black", "White", "Light Gray", "Dark Gray", "Bright Red",
    "Dark Blue", "Bright Blue"];
const bootSizes = ['', '', '', "#3 Boot (0.25in - 5in)","#4 Boot (3in - 6.5in)", "#5 Boot (4.25in - 7.75in)",
    "#6 Boot (5in - 9in)", "#7 Boot (6in - 11in)", "#8 Boot (7in - 13in)", "#9 Boot (9in - 19in)"];

var bootSizeSelector = document.getElementById('bootSizeSelector');
var bootColorSelector = document.getElementById('bootColorSelector');
var hiTemp = document.getElementById('hiTemp');
var isSplit = document.getElementById('isSplit');
var bootQuant = document.getElementById('bootQuant');

var iwValleys = document.getElementById('iwValleys');
var iwDrip = document.getElementById('iwDrip');
var iwRake = document.getElementById('iwRake');
var iwSidewall = document.getElementById('iwSidewall');
var iwHips = document.getElementById('iwHips');

var fasciaColorSelector = document.getElementById('fasciaColorSelect');
var soffitColorSelector = document.getElementById('soffitColorSelect');
var fasciaAtDrip = document.getElementById('fasciaDrip');
var fasciaAtRake = document.getElementById('fasciaRake');
var fasciaHeight = document.getElementById('fasciaHeightSelect')
var soffitAtDrip = document.getElementById('soffitDrip');
var soffitAtRake = document.getElementById('soffitRake');
var soffitVented = document.getElementById('soffitVented');
var soffitLength = document.getElementById('soffitLength');

var panelTable = document.getElementById('panel-table');
var trimsTable = document.getElementById('trim-table');
var accessoriesTable = document.getElementById('accessories-table');
var panelTotalLabel = document.getElementById('panel-total');
var trimWeightlabel = document.getElementById('trimWeightLabel');
var trimTotalLabel = document.getElementById('trim-total');
var accessoriesTotalLabel = document.getElementById('accessories-total');
var receiptTotalLabel = document.getElementById('receipt-total');

var panelFtBox = document.getElementById('panel-ft');
var panelInBox = document.getElementById('panel-in');
var panelQuantity = document.getElementById('panel-quant');
var panelWarning = document.getElementById('panel-warning');
var trimWarning = document.getElementById('trim-warning');
var panelScrewsLabel = document.getElementById('panelScrewsLabel');
var panelWeightLabel = document.getElementById('panelWeightLabel');
var panelSqLabel = document.getElementById('panelSqLabel');

var hrPanelArray = new Array();
var hrTrimArray = new Array();
var hrAccessoryArray = new Array();
var bootArray = new Array();
var ssPanelArray = new Array();
var ssTrimArray = new Array();
var ssAccessoryArray = new Array();

const hardyRibPanelFtCost = 2.35;
const hardyRibTextPanelFtCost = 2.70;
const hrPremiumPanelFtCost = 2.70;
const econoRibPanelFtCost = 1.89;
const galvHrPanelCost = 1.89;
const ssStandardFtCost = 2.10;
const ss26gaTextCost = 2.50;
const ssPremiumFtCost = 2.70;
const ss24gaCost = 3.50;
const ss24gaPremiumCost = 4.50;
const ss24gaTextCost = 4.00;
const taxRate = 0.06;

var hrRidgePrice = 15;
var hrGablePrice = 15;
var hr20inValleyPrice = 20;
const hrEndwallPrice = 15;
const hrSidewallPrice = 15;
const hrInsideTransPrice = 18;
const hrOutsideTransPrice = 18;

const ssRidgePrice = 22;
const ssGablePrice = 18;
const ssValleyPrice = 20;
const ssEndwallPrice = 22;
const ssSidewallPrice = 18;
const ssInsideTransPrice = 18;
const ssOutsideTransPrice = 20;

const soffitPricePerIn = 0.12;

const screw2inPrice = 19;
const screw1halfPrice = 17;
const ventRollPrice = 22;
const uniRollPrice = 20;
const closureFoamPrice = 1.25;
const nailBoxPrice = 5;
const iceWaterPrice = 75;
const feltRollPrice = 35;
const closureFoamBoxPrice = 100;

var selectedPanelType;
var selectedHrColor = colorsHrStandard[0];
var selectedHrTrimColor = colorsHrStandard[0];
var selectedSsColor = colors26gaStandard[0];

var mediaQuery = window.matchMedia("(max-width: 600px)");
mediaQuery.addListener(showTables);

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
});

function getAll26gaColors(){
    return colors26gaStandard.concat(colors26gaPremium);
}

function getAll29gaColors(){
    return colorsHrStandard.concat(colorsHrPremium);
}

//init
selectHr();
populateSelector(bootColorSelector, bootColors);
populateSelector(fasciaColorSelector, colorsHrStandard);
populateSelector(soffitColorSelector, colorsHrStandard);
fasciaColorSelector.selectedIndex=10;
soffitColorSelector.selectedIndex=10;
populateBootSizes();
// getElementById('addPanels').style.display='block';

function selectInputData(e){
    e.focus();
    e.select();
}

function selectHr(){
    if (selectedPanelType != 'Hardy Rib'){
        selectedPanelType = 'Hardy Rib';
        showTables()
        updatePanelPriceLabel(hardyRibPanelFtCost);
        populateSelector(panelColor, colorsHrStandard);
        populateSelector(trimColor, colorsHrStandard);
        panelFtBox.min=2;
        panelFtBox.max=40;
        showReceiptTotal();
        trimColor.disabled = false;
        panelColor.selectedIndex = getAll29gaColors().indexOf(selectedHrColor);
        trimColor.selectedIndex = getAll29gaColors().indexOf(selectedHrTrimColor);
        
    }
}

function selectSs(){
    if (selectedPanelType != 'Standing Seam'){
        selectedPanelType = 'Standing Seam';
        if (colors26gaStandard.includes(selectedSsColor)){
            updatePanelPriceLabel(ssStandardFtCost, 16);
        } else {
            updatePanelPriceLabel(ssPremiumFtCost, 16);
        }
        showTables();
        populateSelector(panelColor, colors26gaStandard.concat(colors26gaPremium));
        populateSelector(trimColor, colors26gaStandard.concat(colors26gaPremium))
        panelFtBox.min=1;
        panelFtBox.max=20;
        showReceiptTotal();
        let i = getAll26gaColors().indexOf(selectedSsColor);
        panelColor.selectedIndex = i;
        trimColor.selectedIndex = i;
        trimColor.disabled = true;
    }    
}

function getSquarePrice(lnFtCost=hardyRibPanelFtCost, width=36){
    let cost = lnFtCost * 1200 / width
    console.log(cost);
    return cost;
}


function updatePanelPriceLabel(lnFtCost, width=36){
    panelPriceLabel.innerHTML = dollarString(lnFtCost) +" ln/ft\t\t";
    panelSqPriceLabel.innerHTML = dollarString(getSquarePrice(lnFtCost,width)) + " per Square";
}

function handleBootSizeChange(e){
    if([3,4].includes(e.value)){
        if (bootColorSelector.length<3){
            populateSelector(bootColorSelector, bootColors);
        }
    } else {
        populateSelector(bootColorSelector, ['Light Gray']);
    }
    bootSizeCheck();
}

function handleHiTempChange(e){
    if(e.checked){
        isSplit.checked = false;
        populateSelector(bootColorSelector, ['Light Gray']);
    } else if(bootColorSelector.length<3) {
        populateSelector(bootColorSelector, bootColors);
    }
    bootSizeCheck();
}

function handleSplitBootChange(e){
    if (e.checked){
        bootSizeSelector.innerHTML = "<option value='1'>#1 Split 0.25-3 inches</option>";
        bootColorSelector.innerHTML = "<option>Gray</option>";
        hiTemp.checked = false;
    } else {
        populateBootSizes();
        populateSelector(bootColorSelector, bootColors);
    }
}

addUnderlayment.addEventListener('click', function(){
    if (this.checked){
        iwDrip.checked = true;
        iwValleys.checked = true;
    }
});

function handlePanelColorChange(e){
    matchBootColor(e.value);
    if (selectedPanelType.includes('Standing Seam')){
        selectedSsColor = panelColor.value;
        selectedHrColor = closestHrColor(panelColor.value);
        selectedHrTrimColor = closestHrColor(panelColor.value);
        trimColor.selectedIndex = panelColor.selectedIndex;
    } else {
        if (selectedHrColor === selectedHrTrimColor){
            selectedHrTrimColor = panelColor.value;
            trimColor.selectedIndex = panelColor.selectedIndex;
        }
        selectedHrColor = panelColor.value;
        selectedSsColor = closestSsColor(panelColor.value);
    }

    let newPrice = hardyRibPanelFtCost;
    if (colorsHrPremium.includes(selectedHrColor)){
        newPrice = hrPremiumPanelFtCost;
    }
    //change color and price of panels already added to receipt
    hrPanelArray.forEach(function(p){ 
        p.color = selectedHrColor;
        p.setFtPrice(newPrice);
    });
    newPrice = ssPremiumFtCost;
    if (colors26gaStandard.includes(selectedSsColor)){
        newPrice = ssStandardFtCost;
    }
    ssPanelArray.forEach(function(p){
        p.color = selectedSsColor;
        p.setFtPrice(newPrice);
    });
    ssTrimArray.forEach(function(t){
        t.color = selectedSsColor;
    });

    showTrimTable();
    showPanelTable();
}

function handleTrimColorChange(e){
    if (!selectedPanelType.includes("Standing Seam")){
        selectedHrTrimColor = e.value;
    }
    hrTrimArray.forEach(function(t){
        t.color = selectedHrTrimColor;
    });
    showTrimTable();
}

function getSelectedPanelRadio(){
    for (i=0; i<panelTypeRadio.length; i++){
        if (panelTypeRadio[i].checked){
            return panelTypeRadio[i].value;
        }
    }
}

function closestHrColor(ssColor){
    switch (ssColor){
        case "Hartford Green":
        case "Evergreen":
            return "Forest Green";
        case "Shiny Black":
        case "Matte Black":
            return "Black";
        case "Bright White":
            return "White";
        case "Stone":
            return "Light Stone";

        case "Charcoal Gray":
        case "Burgundy":
        case "Rustic Red":
        case "Dark Red":
        case "Burnished Slate":
        case "Cocoa Brown":
        case "Hawaiian Blue":
        case "Gallery Blue":
        case "Tan":
        case "White":
        case "Clay":
        case "Light Gray":
            return ssColor;
    }
}

function closestSsColor(hrColor){
    switch (hrColor){
        case "Forest Green":
            return "Evergreen";
        case "Light Stone":
            return "Stone";
        case "Black":
            return "Shiny Black";

        case "Charcoal Gray":
        case "Burgundy":
        case "Rustic Red":
        case "Dark Red":
        case "Burnished Slate":
        case "Cocoa Brown":
        case "Hawaiian Blue":
        case "Gallery Blue":
        case "Tan":
        case "White":
        case "Clay":
        case "Light Gray":
            return hrColor;
    }
}

function getRivetColor(ssColor){
    switch(ssColor){
        case "Matte Black":
        case "Shiny Black":
            return "Black";
        case "White":
        case "Bright White":
            return "White";
        case "Stone":
        case "Ivory":
            return "Light Stone";

        case "Evergreen":
        case "Hartford Green":
        case "Charcoal Gray":
        case "Burnished Slate":
        case "Cocoa Brown":
        case "Burgundy":
        case "Tan":
        case "Light Gray":
        case "Clay":
        case "Gallery Blue":
        case "Hawaiian Blue":
        case "Dark Red":
        case "Rustic Red":
            return ssColor;
    }
}

function matchBootColor(color){
    if (bootColorSelector.length == bootColors.length){
    switch(color){
        case "Forest Green":
        case "Evergreen":
        case "Hartford Green":
            bootColorSelector.selectedIndex = 0; //Green
            break;
        case "Burnished Slate":
        case "Dark Bronze":
        case "Cocoa Brown":
        case "Clay":
        case "Tan":
            bootColorSelector.selectedIndex = 1; //Brown
            break;
        case "Black":
        case "Matte Black":
        case "Shiny Black":
            bootColorSelector.selectedIndex = 2; //Black
            break;
        case "White":
            bootColorSelector.selectedIned = 3; //White
            break;
        case "Charcoal Gray":
        case "Charcoal":
            bootColorSelector.selectedIndex = 5; //Dark Grey
            break;
        case "Rustic Red":
        case "Dark Red":
        case "Crimson Red":
            bootColorSelector.selectedIndex = 6; //Bright Red;
            break;
        case "Gallery Blue":
            bootColorSelector.selectedIndex = 7; //Dark Blue;
            break;
        case "Hawaiian Blue":
            bootColorSelector.selectedIndex = 8; //Light Blue
            break;
        case "Light Gray":
        default:
            bootColorSelector.selectedIndex = 4; //Light Gray
        }
    }
    else {
        bootColorSelector.selectedIndex = 0;
    }
}

function bootSizeCheck(){
    if (isSplit.checked){
        bootSizeSelector.innerHTML = "<option value='1'>#1 Split 0.25-3 inches</option>";
    } else if (bootSizeSelector.length < 4){
        populateBootSizes();
    }
}

function populateSelector(selector, itemsToPopulate){
    if(selector == bootSizes){
        populateBootSizes();
    } else {
        newString='';
        itemsToPopulate.forEach(function(i){
            if(i != ''){
                newString += "<option>"+i+"</option>";
            }
        });
        selector.innerHTML = newString;
    }
    if (selector == bootColors && bootColorSelector.length > 3){
        matchBootColor(selectedhrColor);
    }
}

function populateBootSizes(){
    if (!isSplit.checked && bootSizeSelector.length < 5){
        bootSizeSelector.innerHTML='';
        bootString = ''
        for(i=3; i<=9; i++){
            bootString += "<option value='" + i + "'>" + bootSizes[i];
        }
        bootSizeSelector.innerHTML = bootString;
    }
}

function openPanelTab(e, tabName){
    var tabContent = document.getElementsByClassName('panelTabContent');
    for(i=0; i< tabContent.length; i++){
        tabContent[i].style.display='none';
    }
    var buttons = document.getElementsByClassName('panelTabButton');
    for(i=0; i<buttons.length; i++){
        buttons[i].className = buttons[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display='block';
    e.currentTarget.className += " active";
}

function openExtrasTab(e, tabName){
    var tabContent = document.getElementsByClassName('extrasTabContent');
    for(i=0; i< tabContent.length; i++){
        tabContent[i].style.display='none';
    }
    let tabLinks = document.getElementsByClassName('extrasTabButton');
    for(i=0; i<tabLinks.length; i++){
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "flex";
    e.currentTarget.className += " active";
}

function addPanelButton(){
    let doAdd = true;
    if (panelFtBox.value < 0 || panelInBox.value < 0 || panelQuantity.value < 0){
        panelWarning.innerHTML += "All numbers must be positive.<br>";
        doAdd = false;
    }
    if (panelFtBox.value < 2 || panelFtBox.value > 40){
        panelWarning.innerHTML += "Panel length must be between 2-40 feet.<br>";
        doAdd = false;
    }
    if (panelInBox.value > 11){
        panelWarning.innerHTML += "Inches must be between 0-11";
        doAdd = false;
    }
    if (doAdd) {
        panelWarning.innerHTML = '';
        let ft = Math.floor(panelFtBox.value);
        let inches = Math.ceil(panelInBox.value);
        let length = ft*12 + inches;
        let quantity = Math.ceil(panelQuantity.value*1);
        let width = quantity * 36;
        if (quantity>999){
            quantity = 999;
            panelWarning.innerHTML += "Max quantity orderable is 999";
        }
        if (selectedPanelType == 'Standing Seam'){
            addPanels(Panel.standingSeam(length, panelColor.value, quantity), ssPanelArray);
            width = quantity * 16;
            let newQuant = Math.ceil(width/36);
            addPanels(new Panel(length, selectedHrColor, newQuant));
        } else {
            addPanels(new Panel(length, panelColor.value, quantity));
            let newQuant = Math.ceil(width/16);
            addPanels(Panel.standingSeam(length, selectedSsColor, newQuant), ssPanelArray);
        }
        panelQuantity.value = 1;
    }
}

function calculate(){
    reset();
    trimWarning.innerHTML = '';
    for (i=0; i<measures.length; i++){
        if (isNaN(parseInt(measures[i].value)) || measures[i].value < 0){
            //If number box is blank, not a number, or less than 0, this sets it to 0
            measures[i].value = 0;
        } else if (parseInt(measures[i].value) > parseInt(measures[i].max)){
            //or if over max value, sets it to max value
            measures[i].value = measures[i].max;
            trimWarning.innerHTML += "Max value for " + measures[i].name + " is " + measures[i].max + "<br>";
        }
    }

    let ridgeFt = parseInt(measures[0].value);
    let hipFt = parseInt(measures[1].value);
    let gableFt = parseInt(measures[2].value);
    let dripFt = parseInt(measures[3].value);
    let valleyFt = parseInt(measures[4].value);
    let sidewallFt = parseInt(measures[5].value);
    let endwallFt = parseInt(measures[6].value);
    let insideTransFt = parseInt(measures[7].value);
    let outsideTransFt = parseInt(measures[8].value);

    addUnderlay(valleyFt, dripFt, gableFt, sidewallFt, hipFt);

    calcRidge(ridgeFt, hipFt);
    if (isRidgeVented.checked){
        calcRidgeVent(ridgeFt);
    }
    calcGable(gableFt);
    calcDrip(dripFt);
    calcFlashing(sidewallFt, endwallFt);
    calcValley(valleyFt);
    calcTrans(insideTransFt, outsideTransFt);
    calcUniFoam(hipFt, valleyFt);
    calcInsideFoam(dripFt, insideTransFt, outsideTransFt);
    calcOutsideFoam(ridgeFt, endwallFt, insideTransFt, outsideTransFt);
    calcFascia(dripFt, gableFt);
    calcSoffit(dripFt, gableFt);
    
    calcSolidJ(ridgeFt, hipFt);

    addNails(dripFt, valleyFt, insideTransFt, outsideTransFt);
    addPanelScrews();
    addTrimScrews(ridgeFt, endwallFt, hipFt, insideTransFt, outsideTransFt, gableFt, sidewallFt, dripFt);
    addCaulk(ridgeFt, endwallFt, insideTransFt, outsideTransFt, valleyFt);
    calcRivets(ridgeFt, hipFt, gableFt, sidewallFt, endwallFt, insideTransFt, outsideTransFt);
    calcButylTapeSs(gableFt, sidewallFt, valleyFt, insideTransFt, outsideTransFt);
    addBootScrews();
    showTables();
    showTrimsCost();
    showAccessoriesCost();
    showReceiptTotal();
}

function defaultMinMax(value, min=0, max=0){
    if (value.isNaN){
        return 0;
    }
    newValue = 0;
    if (value < min){
        return min;
    } else if (max > 0 && value > max){
        return max;
    } else {
        return newValue;
    }
}

function reset(){
    hrTrimArray = [];
    ssTrimArray = [];
    hrAccessoryArray = [];
    ssAccessoryArray = [];
    trimsTable.innerHTML='';
    accessoriesTable.innerHTML = '';
    trimWeightlabel.innerHTML = '';
    trimTotalLabel.innerHTML = '';
    accessoriesTotalLabel.innerHTML = '';
    receiptTotalLabel.innerHTML = '';
}

function resetPanels(){
    hrPanelArray = [];
    ssPanelArray = [];
    panelScrewsLabel.innerHTML = '';
    panelWeightLabel.innerHTML = '';
    panelTotalLabel.innerHTML = '';
    panelSqLabel.innerHTML = '';
    panelTable.innerHTML = '';
}

function resetMeasures(){
    for (let i=0; i<measures.length; i++){
        measures[i].value = 0;
    }
    reset();
}

function addPanels(panel, selectedArray=hrPanelArray){
    if (panel.quantity > 0){
        let added = false;
        for (i=0; i<selectedArray.length; i++){
            if (selectedArray[i].equals(panel)){
                selectedArray[i].quantity+=panel.quantity;
                added = true;
                showPanelTable();
                break;
            }
        }
        if (!added){
            selectedArray.push(panel);
            if ((selectedArray == hrPanelArray && selectedPanelType === 'Hardy Rib')
            || (selectedArray==ssPanelArray && selectedPanelType.includes('Standing Seam')))
            addToPanelTable(panel);
        }
    }
    showPanelLabels();
    if (hrTrimArray.length>0 || hrAccessoryArray.length>0){
        showReceiptTotal();
    }
}

function addBoot(boot){
    if(boot.quantity > 0){
        let added = false;
        for (i=0; i<bootArray.length; i++){
            if (bootArray[i].equals(boot)){
                bootArray[i].quantity += boot.quantity;
                added = true;
                showAccessoriesTable();
                break;
            }
        }
        if (!added){
            bootArray.push(boot);
            addToAccessoriesTable(boot);
        }
        showAccessoriesCost();
        showReceiptTotal();
    }
}

function addBootButton(){
    if (bootQuant.value > 99){
        trimWarning.innerHTML = "Max number of boots is 99";
    }
    if (bootQuant.value > 0 && bootQuant.value < 100){
        addBoot(new Boot(bootSizeSelector.value, hiTemp.checked, isSplit.checked,
            bootColorSelector.value, bootQuant.value));
    }
}

function showPanelsCost(){
    let selectedArray = hrPanelArray;
    let fee = 25;
    let min = 250;
    if (selectedPanelType.includes("Standing Seam")){
        selectedarray = ssPanelArray;
        min = 1000;
        fee = 100;
    }
    total = getArrayPrice(selectedArray);
    if (total > 0){
        let extra = '';
        if (total < min){
            extra = "<h6 class='smol priceHeader'>Includes $"+ fee +" for panel orders under $" + min + "</h6>";
            total += fee;
        }
        let label = "<h3 class='priceHeader'>Panels total: " + dollarString(total) + "</h3>";
        panelTotalLabel.innerHTML = label+extra;
        }
    }

function showTrimsCost(){
    trimTotalLabel.innerHTML = "Trims total: " + dollarString(getTrimTotal());
    trimWeightlabel.innerHTML = "Trims Weight: ~" + getTrimsWeight() + " lbs";
}

function showAccessoriesCost(){
    cost = 0;
    if (selectedPanelType.includes("Standing Seam")){
        cost = getArrayPrice(ssAccessoryArray);
    } else {
        cost = getArrayPrice(hrAccessoryArray);
    }
    accessoriesTotalLabel.innerHTML = "Accessories total: " + dollarString(cost);
}

function showReceiptTotal(){
    let total = getReceiptTotal();
    receiptTotalLabel.innerHTML = "<h3 class='priceHeader'>Est. total: " +
        dollarString(total.toFixed(2)) + "</h3>" + 
        "<h4 class='priceHeader'> (Plus " + dollarString(total*taxRate) + " tax)</h4>" +
        "<h2 class='priceHeader'>Total Estimated Price: " + dollarString(total * (1+taxRate));
}

function showPanelLabels(){
    showPanelsCost();
    panelScrewsLabel.innerHTML = "Screws: " + getPanelScrews().toLocaleString('en');
    panelSqLabel.innerHTML = getRoofSqFt().toLocaleString('en') + " sq.ft";
    panelWeightLabel.innerHTML = "Panels Weight: ~" + Math.ceil(getPanelsWeight()).toLocaleString('en') + ' lbs';
}

function addTrims(trim, selectedArray=hrTrimArray){
    if (trim.quantity > 0){
        let added = false;
        for (i=0; i<selectedArray.length; i++){
            if (selectedArray[i].getFullName() == trim.getFullName()){
                selectedArray[i].quantity += trim.quantity;
                added = true;
                break;
            }
        }
        if (!added){
            selectedArray.push(trim);
        }
    }
}

function addAccessories(accessory, selectedArray=hrAccessoryArray){
    let added = false;
    if (accessory.count >0){
        for(i = 0; i<selectedArray.length; i++){
            if (selectedArray[i].equals(accessory)){
                selectedArray[i].quantity+=(accessory.quantity);
                added = true;
                break;
            }
        }
        if (!added){
            selectedArray.push(accessory);
        }
    }
}

function addUnderlay(valleyFt, dripFt, rakeFt, sidewallFt, hipFt){
    let iceWaterFt = 0;
    if (iwValleys.checked && valleyFt > 0){
        iceWaterFt += valleyFt * 2;
    }
    if (iwDrip.checked && dripFt > 0){
        iceWaterFt += dripFt;
    }
    if (iwRake.checked && rakeFt > 0){
        iceWaterFt += rakeFt;
    }
    if (iwSidewall.checked && sidewallFt > 0){
        iceWaterFt += sidewallFt;
    }
    if (iwHips.checked && hipFt > 0){
        iceWaterFt += hipFt;
    }
    let iceWaterRolls = 0;
    if (iceWaterFt > 0){
        iceWaterRolls = Math.ceil(iceWaterFt/66.6);
        let rolls = new Accessory("Ice & Water Shield Dewitt's Hi-temp 2sq roll 66.6\' x 3\'",
            iceWaterRolls, iceWaterPrice);
        addAccessories(rolls, hrAccessoryArray);
        addAccessories(rolls, ssAccessoryArray);
    }
    if (!furringStrips.checked && addUnderlayment.checked){
        let feltSqFt = getRoofSqFt() - (iceWaterRolls * 200);
        if (feltSqFt > 0){
            let feltRolls = Math.ceil(feltSqFt/1000);
            let rolls = new Accessory("Synethetic Felt EXO Stinger 10sq roll 250\' x 4\'",
                feltRolls, feltRollPrice);
            addAccessories(rolls, hrAccessoryArray);
            addAccessories(rolls, ssAccessoryArray);
        }
    }
}

function calcRidge(ridgeFt, hipFt){
    if (ridgeFt>1000 || hipFt >1000){
        return;
    } else if (ridgeFt > 0 || hipFt > 0){
        let totFt = ridgeFt + hipFt;
        let quant = Math.ceil(totFt/10);
        addTrims(Trim.ridgeCap(quant, selectedHrColor));
        addTrims(new Trim("Standing Seam Ridge Cap", quant, 22.00, selectedSsColor, 10.4, 122), ssTrimArray);
    }
}

function calcRidgeVent(ridgeFt){
    if (ridgeFt<1000 && ridgeFt>0 && isRidgeVented.checked){
        let ventRolls = Math.floor(ridgeFt/10);
        if (ridgeFt % 10 > 6){
            ventRolls++;
        }
        if (ventRolls > 0){
            addAccessories(new Accessory("Ridgevent Roll 10ft (2ct)", ventRolls, 22.00), hrAccessoryArray);
        }
        let perfJ = Math.floor(ridgeFt*2/10);
        if (perfJ > 0){
            addTrims(new Trim("Perforatd J-Channel", perfJ, 22.00, '', 5.4, 122), ssTrimArray);
        }
    }
}

function calcGable(gableFt){
    if(gableFt > 0 && gableFt < 1000){
        let quant = Math.ceil(gableFt/10);
        addTrims(Trim.gable(quant, selectedHrTrimColor));
        addTrims(new Trim("Standing Seam Gable w/z-bar", quant, 18, selectedSsColor, 7),ssTrimArray);
    }
}

function calcDrip(dripFt){
    if (dripFt>0 && dripFt < 1000) {
        dripEdges = Math.ceil(dripFt/10);
        if (overShingles.checked){
            addTrims(new Trim("1x3 Drip Edge", dripEdges, 9, selectedHrTrimColor, 3.9));
            addTrims(new Trim("Standing Seam Drip Edge 1in", dripEdges, 12, selectedSsColor, 5.4), ssTrimArray);
        } else {
            addTrims(new Trim("New Style Drip Edge", dripEdges, 7, selectedHrTrimColor, 2.8));
            addTrims(new Trim("Standing Seam Drip Edge 2in", dripEdges, 15, selectedSsColor, 6.5), ssTrimArray);
        }
    }
}

function calcFlashing(sidewallFt, endwallFt){
    if (sidewallFt > 0 && sidewallFt < 1000){
        let quant = Math.ceil(sidewallFt/10);
        addTrims(new Trim("Sidewall Flashing", quant, hrSidewallPrice, selectedHrTrimColor, 4.8));
        addTrims(new Trim("Standing Seam Sidewall Flashing", quant, ssSidewallPrice, selectedSsColor, 6.5, 122),
            ssTrimArray);
    }
    if (endwallFt > 0 && endwallFt < 1000){
        let quant = Math.ceil(endwallFt/10);
        addTrims(new Trim("Endwall Flashing", quant, hrEndwallPrice, selectedHrTrimColor, 4.8));
        addTrims(new Trim("Standing Seam Endwall Flashing w/J-Channel", quant, ssEndwallPrice, selectedSsColor, 8),
            ssTrimArray);
    }
}

function calcValley(valleyFt){
    if (valleyFt > 0 && valleyFt < 1000){
        let quant = Math.ceil(valleyFt/10);
        addTrims(new Trim("Valley Pan 20in Hardy Rib", quant, hr20inValleyPrice, selectedHrColor, 9.8));
        addTrims(new Trim("Valley Pan 20in Standing Seam", quant, ssValleyPrice, panelColor.value, 16),
            ssTrimArray);
    }
}

function calcTrans(insideTransFt, outsideTransFt){
    if (insideTransFt > 0 && insideTransFt < 1000){
        let quant = Math.ceil(insideTransFt/10);
        addTrims(new Trim("Inside Transition", quant, hrInsideTransPrice, selectedHrColor, 6.5), hrTrimArray);
        addTrims(new Trim("Standing Seam Inside Transition w/Z-Bar", quant, ssInsideTransPrice,
            selectedSsColor, 8), ssTrimArray);
    }
    if (outsideTransFt > 0 && outsideTransFt < 1000){
        let quant = Math.ceil(outsideTransFt/10);
        addTrims(new Trim("Outside Transition", quant, hrOutsideTransPrice, selectedHrColor, 6), hrTrimArray);
        addTrims(new Trim("Standing Seam Outside Transition w/Z-Bar", quant, ssOutsideTransPrice,
            selectedSsColor, 9), ssTrimArray);
    }
}

function calcSolidJ(ridgeFt, hipFt, endwallFt=0){
    let footage = hipFt*2;
    if (!isRidgeVented.checked){
        footage += ridgeFt*2;
    } else {
        footage += ridgeFt*2 % 10;
    }    
    footage += endwallFt;
    if (footage > 0){
        addTrims(new Trim("Standing Seam Solid J-Chanenel", Math.ceil(footage/10), 8, selectedSsColor, 5.4, 122),
        ssTrimArray);
    }
}

function calcCleat(insideTransFt, outsideTransFt, valleyFt){
    if (insideTransFt + outsideTransFt + valleyFt > 0){
        let footage = insideTransFt + outsideTransFt + valleyFt*2;
        addTrims(new Trim("Standing Seam Cleat", Math.ceil(footage/10), 6, '', 2.5, 122));
    }
}

function getNumOfZbars(gableFt, insideTransFt, outsideTransFt, sidewallFt){
    let footage = gableFt + insideTransFt + outsideTransFt + sidewallFt;
    if (footage > 0){
        return Math.ceil(footage/10);
    }
    return 0;
}

function calc3Fters(footage){
    if (footage.isNaN || footage <= 0){
        return 0;
    } else {
        return Math.ceil(footage/3);
    }
}

function calcRivets(ridgeFt, hipFt, rakeFt, sidewallFt, endwallFt, insideTransFt, outsideTransFt){
    let count = ridgeFt + hipFt;
    count += (rakeFt + sidewallFt + endwallFt + insideTransFt + outsideTransFt)/2;
    if (count > 0){
        let rivets = Accessory.rivets(getRivetColor(selectedSsColor), count);
        addAccessories(rivets, ssAccessoryArray);
    }
}

function calcButylTapeSs(gableFt, sidewallFt, valleyFt, insideTransFt, outsideTransFt){
    let ftage = gableFt + sidewallFt + valleyFt*2 + insideTransFt + outsideTransFt;
    if (ftage > 0){
        let rolls = Math.ceil(ftage/25);
        addAccessories(new Accessory("Butyl Tape 25ft roll", rolls, 5.00), ssAccessoryArray);
    }
}

function addNails(dripFt, valleyFt, insideTransFt, outsideTransFt){
    let nails = (dripFt + insideTransFt + outsideTransFt)/2 + valleyFt;
    addAccessories(new Accessory("Box of Nails (177ct)", nails, 5.00, 177));
}

function calcInsideFoam(dripFt, insideTransFt, outsideTransFt){
    let foams = calc3Fters(dripFt);
    foams += calc3Fters(insideTransFt);
    foams += calc3Fters(outsideTransFt);
    if (foams > 0){
        addAccessories(new Accessory("Inside Closure Foam 3ft", foams, 1.25, 1, 100.00, 100));
    }
}

function calcOutsideFoam(ridgeFt, endwallFt, insideTransFt, outsideTransFt){
    let foams = calc3Fters(endwallFt);
    foams += calc3Fters(insideTransFt);
    foams += calc3Fters(outsideTransFt);
    if (!isRidgeVented.checked){
        foams += calc3Fters(ridgeFt)*2;
    } else if(ridgeFt % 10 <= 6) {
        foams += calc3Fters(ridgeFt %10)*2;
    }
    if (foams > 0){
        addAccessories(new Accessory("Outside Closure Foam 3ft", foams, 1.25, 1, 100.00, 100));
    }
}

function calcUniFoam(valleyFt, hipFt){
    foams = Math.ceil((valleyFt + hipFt) / 12.5);
    if (foams > 0){
        addAccessories(new Accessory("Universal Foam Roll 25ft", foams, 10.00));
    }
}

function calcFascia(dripFt, rakeFt){
    let height = parseInt(fasciaHeight.value);
    let length = 0;
    if (height > 0){
        let price = 0;
        let weight = (height+2)*0.475;
        switch (height){
            case 4:
                price = 6.00;
                break;
            case 6:
                price = 8.00;
                break;
            case 8:
                price = 12.00;
                break;
            case 12:
                price = 20.00;
        }
        if (fasciaAtDrip.checked){
            length += dripFt;
        }
        if (fasciaAtRake.checked){
            length += rakeFt;
        }
        if (length > 0){
            let fascia = new Trim("Fascia "+ height + "in", Math.ceil(length/10), price,
                fasciaColorSelector.value, weight);
            addTrims(fascia, hrTrimArray);
            addTrims(fascia, ssTrimArray);
        }
    }
}

function calcSoffit(dripFt, rakeFt){
    let length = parseInt(soffitLength.value);
    let feet = 0;
    if (length > 0){
        if(soffitAtDrip.chcked){
            feet += dripFt;
        }
        if (soffitAtRake.checked){
            feet += rakeFt;
        }
        if (feet > 0){
            let name='Solid ';
            if (soffitVented.checked){
                name = 'Vented ';
            }
            name += 'Soffit ';
            let soffit = new Trim(name, feet, length*soffitPricePerIn, soffitColorSelector.value,
                length*0.545, length);
            addTrims(soffit);
            addTrims(soffit, ssTrimArray);
        }
    }
}

function addPanelScrews(){
    if (hrPanelArray.length > 0){
        let count = getPanelScrews(hrPanelArray);
        if (overShingles.checked && !furringStrips.checked){
            addAccessories(Accessory.screws2in(count, selectedHrColor));
        } else{
            addAccessories(Accessory.screws1half(count, selectedHrColor));
        }
    }
    if (ssPanelArray.length > 0){
        let count = getPanelScrews(ssPanelArray);
        if (overShingles.checked && !furringStrips.checked){
            addAccessories(Accessory.panCakeScrews1halfIn(count), ssAccessoryArray);
        } else {
            addAccessories(Accessory.panCakeScrews1in(count), ssAccessoryArray);
        }
    }
}

function getPanelScrews(){
    let screws = 0;
    panels = hrPanelArray;
    if (selectedPanelType.includes('Standing Seam')){
        panels = ssPanelArray;
    }
    panels.forEach(function(p){
        screws+= p.getScrewsNeeded();
    });
    return screws;
}

function addTrimScrews(ridgeFt, endWallFt, hipFt, insideTransFt, outsideTransFt, gableFt, sidewallFt, dripFt){
    let screws2 = Math.ceil(ridgeFt * 2.67);
    if (endwallFt > 0){
        screws2 += Math.ceil(endWallFt * 1.34);
    }
    if (hipFt > 0){
        screws2 += parseInt(hipFt)*2;
    }

    let trimScrews = gableFt*2 + sidewallFt;
    if (trimScrews>0){
        if (overShingles.checked){
            if (panelColor.value == trimColor.value){
                screws2 += trimScrews;
            } else {
                addAccessories(Accessory.screws2in(trimScrews,trimColor.value));
            }
        } else {
            addAccessories(Accessory.screws1half(trimScrews,trimColor.value));
        }
    }
    trimScrews = 0;

    if (fasciaAtDrip.checked){
        trimScrews += dripFt/2;
    }
    if (fasciaAtRake.checked){
        trimScrews += rakeFt/2;
    }
    if (trimScrews > 0){
        addAccessories(Accessories(screws1half(trimScrews, fasciaColorSelector.value)));
    }

    if (screws2>0 && panelColor.value !== trimColor.value){
        //add 2in screws if they need to match different trim color, then resets to count new color
        addAccessories(Accessory.screws2in(screws2, trimColor.value));
        screws2 = 0;
    }
    screws2 = parseInt(insideTransFt) + parseInt(outsideTransFt) * 1.34;
    if (screws2 > 0){
        addAccessories(Accessory.screws2in(screws2, panelColor.value));
    }
}

function addCaulk(ridgeFt, endwallFt, insideTransFt, outsideTransFt, valleyFt){
    let tubes = 0.0;
    if (ridgeFt > 10){
        tubes = ridgeFt * 0.01;
    }
    if (endwallFt > 10){
        tubes += endwallFt * 0.01;
    }
    if (selectedHrColor !== selectedHrTrimColor){
        addAccessories(Accessory.caulk(getCaulkColor(selectedHrTrimColor), Math.ceil(tubes)));
        let tubes = 0;
    }
    if (insideTransFt > 10){
        tubes += insideTransFt * 0.01;
    }
    if (outsideTransFt > 10){
        tubes += outsideTransFt * 0.01;
    }
    if (valleyFt > 10){
        tubes += valleyFt * .03;
    }
    tubes += getBootsCaulkTubes();
    let color = getCaulkColor(selectedHrColor);

    addAccessories(Accessory.caulk(color, Math.ceil(tubes)));
    addAccessories(Accessory.caulk(color, Math.ceil(tubes + tubes)), ssAccessoryArray);
}

function getCaulkColor(color){
    switch(color){
        case "Forest Green":
        case "EverGreen":
        case "Hartford Green":
            return "Green";
        case "Rustic Red", "Dark Red":
            return "Red";
        case "White":
        case "Bright White":
            return "White";
        case "Black":
        case "Shiny Black":
        case "Matte Black":
            return "Black";
        case "Ivory":
        case "Stone":
        case "Light Stone":
            return "Light Stone";

        case "Burnsihed Slate":
        case "Cocoa Brown":
        case "Charcoal Gray":
        case "Burgundy":
        case "Hawaiian Blue":
        case "Gallery Blue":
        case "Clay":
        case "Tan":
            return color;

        default:
            return "Clear";
    }
}

function addBootScrews(){
    let screws = 0;
    let bags = null;
    bootArray.forEach(function(b){
        screws += (getscrewsPerBoot(parseInt(b.size)) * parseInt(b.quantity));
    });
    if (screws > 0){
        if (overShingles.checked){
            bags = Accessory.screws2in(screws, panelColor.value);
        } else {
            bags = Accessory.screws1half(screws, panelColor.value);
        }
        if (bags != null){
            addAccessories(bags, hrAccessoryArray);
            addAccessories(bags, ssAccessoryArray);
        }
    }
}

function getscrewsPerBoot(bootNum){
    switch(bootNum){
        case 1:
            return 8;
        case 3:
            return 16;
        case 4:
            return 24;
        case 5:
            return 36;
        case 6:
            return 44;
        case 7:
            return 56;
        case 8:
            return 64;
        case 9:
            return 72;
    }
}

function getRoofSqFt(){
    let sqFt = 0;
    let selectedArray = hrPanelArray;
    if (selectedPanelType.includes("Standing Seam")){
        selectedArray = ssPanelArray;
    }
    selectedArray.forEach(function(p){
        sqFt += p.getSqFt();
    })
    
    return Math.ceil(sqFt);
}

function getBootsCaulkTubes(){
    let tubes = 0.0;
    bootArray.forEach(function(b){
        tubes += (b.getStackPrice()/800);
    });
    return tubes;
}

function showTables(){
    showPanelTable();
    showTrimTable();
    showAccessoriesTable();
}

function showPanelTable(){
    panelTable.innerHTML = '';
    let currentArray = hrPanelArray;
    if (selectedPanelType.includes('Standing Seam')){
        currentArray = ssPanelArray;
    }
    if (currentArray.length>0){
        currentArray.forEach(function(p){
            addToPanelTable(p);
        });
    }
    showPanelLabels();
}

function addToPanelTable(panel){
    console.log(panel);
    let tableString = "<tr><td class='quantityColumn'>"+panel.quantity+"</td>"+
    "<td>"+panel.getFullName()+"</td>";
    if (!mediaQuery.matches){
        tableString += "<td>$"+ panel.getPrice().toFixed(2) + "</td>";
    }
    tableString += "<td>"+ dollarString(panel.getStackPrice()) +"</td></tr>";
    panelTable.innerHTML += tableString;
}

function sortPanelTable(){
    hrPanelArray.sort((p1, p2) => p2.length - p1.length);
    showPanelTable();
}

function showTrimTable(){
    trimsTable.innerHTML='';
    let currentArray = hrTrimArray;
    if (selectedPanelType.includes('Standing Seam')){
        currentArray = ssTrimArray;
    }
    console.log(currentArray);
    if (currentArray.length>0){
        currentArray.forEach(function(t){
            addToTrimTable(t);
        });
    }
    showTrimsCost();
}

function addToTrimTable(trim){
    let tableString = "<tr><td class='quantityColumn'>"+trim.quantity+"</td>"+"<td>"+trim.getFullName()+"</td>";
    if (!mediaQuery.matches){
        tableString += "<td>$"+ trim.price.toFixed(2) + "</td>";
    }
    tableString += "<td>" + dollarString(trim.getStackPrice()) +"</td></tr>";
    trimsTable.innerHTML += tableString;
}

function addToAccessoriesTable(accessory){
    let tableString = "<tr><td class='quantityColumn'>" + accessory.getQuantity() + "</td>" +
    "<td>" + accessory.getName() + "</td>";
    if (!mediaQuery.matches){
        tableString += "<td>$"+ accessory.getPrice().toFixed(2) + "</td>";
    }
    tableString +="<td>"+ dollarString(accessory.getStackPrice()) +"</td></tr>";
    accessoriesTable.innerHTML += tableString;
}

function showAccessoriesTable(){
    accessoriesTable.innerHTML = '';
    let currentArray = hrAccessoryArray;
    if (selectedPanelType.includes("Standing Seam")){
        currentArray = ssAccessoryArray;
    }
    if (currentArray.length > 0){
        currentArray.forEach(function(a){
            addToAccessoriesTable(a);
        });
    }
    if (bootArray.length>0){
        bootArray.forEach(function(b){
            addToAccessoriesTable(b);
        });
    }
    showAccessoriesCost();
}

function getPanelTotal(){
    let selectedArray = hrPanelArray;
    let min = 250;
    let fee = 25;
    if (selectedPanelType.includes('Standing Seam')){
        selectedArray = ssPanelArray;
        min = 1000;
        fee = 100;
    }
    if (selectedArray.length === 0){
        return 0;
    }
    let total = getArrayPrice(selectedArray);
    if (total < min){
        total += fee;
    }
    return Math.round(total*100)/100;
}

function getTrimTotal(){
    let selectedArray = hrTrimArray;
    if (selectedPanelType.includes("Standing Seam")){
        selectedArray = ssTrimArray;
    }
    let total=0;
    for (i=0; i<selectedArray.length; i++){
        total += selectedArray[i].getStackPrice();
    }
    return Math.round(total*100)/100;
}

function getArrayPrice(items){
    cost = 0;
    items.forEach(function(i){
        cost += i.getStackPrice();
    });
    return cost;
}

function getAccessoriesTotal(){
    if (hrAccessoryArray.length === 0 && bootArray.length === 0){
        return 0;
    }
    let total = 0;
    for (i=0; i<hrAccessoryArray.length; i++){
        total+= hrAccessoryArray[i].getStackPrice();
    }
    for (i=0; i<bootArray.length; i++){
        total += bootArray[i].getStackPrice();
    }
    return Math.round(total*100)/100;
}

function getReceiptTotal(){
    let trims;
    let accessories;
    if (selectedPanelType.includes("Standing Seam")){
        trims = ssTrimArray;
        accessories = ssAccessoryArray;
    } else {
        trims = hrTrimArray
        accessories = hrAccessoryArray;
    }
    let panels = getPanelTotal();
    let total = getArrayPrice(trims) + getArrayPrice(accessories) + panels;
    return total;
}

function ftString(inches){
    if (inches.isNaN || inches <=0){
        return '';
    }
    return Math.floor(inches/12) + "ft " + inches%12+ "in";
}

function dollarString(amount){
    return formatter.format(amount);
}

function getPanelsWeight(){
    let weight = 0;
    let panels = hrPanelArray;
    if (selectedPanelType.includes("Standing Seam")){
        panels = ssPanelArray;
    }
    panels.forEach(function(p){
        weight += p.getStackWeight();
    });
    return weight;
}

function getWeight(itemList){
    let wt = 0;
    itemList.forEach(function(i){
        wt += i.getStackWeight();
    });
    return wt;
}

function getTrimsWeight(){
    let weight = 0;
    let selected = hrTrimArray;
    if (selectedPanelType.includes("Standing Seam")){
        selected = ssTrimArray;
    }
    selected.forEach(function(t){
        weight += t.getStackWeight();
    });
    return Math.ceil(weight);
}


class Panel{
    constructor(length, color, quantity, name="HardyRib", gauge=29, ftPrice=hardyRibPanelFtCost, textured=false){
        this.name = name + " " + gauge + "ga " + color + " " + ftString(length);
        this.length = Math.ceil(length);
        this.color = color;
        this.quantity = Math.ceil(quantity);
        this.gauge = parseInt(gauge);
        this.ftPrice = parseFloat(ftPrice);
        this.textured = textured;
        this.price = Math.round((length/12 * ftPrice)*100)/100;
    }

    static econoRib(length, quantity){
        return new Panel(length, "Bright White", quantity, "EconoRib", 29, econoRibPanelFtCost);
    }

    static hardyRibPanels(length, color, quantity, textured){
        if (length > 480){
            return null;
        }
        let perFtPrice = hardyRibPanelFtCost;
        if (textured){
            perFtPrice = hardyRibTextPanelFtCost;
        } else if (colorsHrPremium.includes(color)){
            perFtPrice = hrPremiumPanelFtCost;
        }
        return new Panel(length, color, quantity, "HardyRib", 29, perFtPrice, textured);
    }

    static standingSeam(length, color, quantity, gauge=26, textured=false){
        let price = ssPremiumFtCost;
        if (gauge == 24){
            if (textured){
                price = ss24gaTextCost;
            } else  {
                price = ss24gaCost;
            }
        } else if (textured && gauge == 26){
            price = ssTextCost;
        } else if (colors26gaStandard.includes(color)){
            price = ssStandardFtCost;
        }
        return new Panel(length, color, quantity, "HardySnap Standing Seam Striated", 26, price, textured);
    }

    getFullName(){
        return (this.name + " " + this.gauge + "ga " + this.color + " " + ftString(this.length));
    }

    getPrice(){
        return this.price;
    }

    setFtPrice(ftPrice){
        this.ftPrice = ftPrice;
        this.price = Math.round((length/12 * ftPrice)*100)/100;
    }

    getStackPrice(){
        return this.quantity * this.price;
        // return Number(this.price) * Number(this.quantity);
    }

    getSqFt(){
        let perPanel = this.length/4;
        return perPanel * this.quantity;
    }

    getScrewsNeeded(){
        let perPanel = Math.ceil(this.length/24);
        if (!this.name.includes("Standing Seam")){
            perPanel *= 4;
        }
        return perPanel * this.quantity;
    }

    equals(panel){
        return (this.color + this.length + this.gauge) === (panel.color + panel.length + panel.gauge);
    }

    getWeight(){
        return 0.1584 * this.length;
    }

    getStackWeight(){
        return this.quantity * this.getWeight();
    }
}

class Trim {
    constructor(trimName, quantity, price, color, weight=6.5, lengthIn = 122){
        this.name = trimName;
        this.quantity = parseInt(quantity);
        this.price = parseFloat(price);
        this.color = color;
        this.lengthIn = parseInt(lengthIn);
        this.weight = parseFloat(weight);
    }

    getStackPrice(){
        return Number(this.price)*Number(this.quantity);
    }

    equals(trim){
        return (this.name+this.color+this.lengthIn) === (trim.name+trim.color+trim.lengthIn);
    }

    add(count){
        this.quantity += count;
    }

    getQuantity(){
        return this.quantity;
    }

    getPrice(){
        return this.price;
    }

    getColor(){
        return this.color;
    }

    getLengthIn(){
        return this.length;
    }

    getFullName(){
        return this.name + " " + ftString(this.lengthIn) + " " + this.color;
    }

    getWeight(){
        return this.weight;
    }

    getStackWeight(){
        return this.weight * this.quantity;
    }

    getStackPrice(){
        return this.quantity * this.price;
    }

    static ridgeCap(quantity, color){
        return new Trim("Ridge Cap", quantity, hrRidgePrice, color, 6.5);
    }

    static gable(count, color){
        return new Trim("Residential Gable", count, hrGablePrice, color, 4.75);
    }
}

class Accessory{
    constructor(name, count, price, ctPerBox = 1, bulkPrice = 0, bulkSize = 0){
        this.name = name;
        this.count = Math.ceil(count);
        this.price = parseFloat(price);
        this.ctPerBox = parseInt(ctPerBox);
        this.bulkPrice = parseFloat(bulkPrice);
        this.bulkSize = parseInt(bulkSize);
    }

    getStackPrice(){
        if (this.bulkSize > 0 && this.count >= this.bulkSize){
            let boxes = Math.floor(this.getQuantity()/this.bulkSize);
            let newPrice = Number(boxes * this.bulkPrice);
            let extra = this.getQuantity() - this.bulkSize * boxes;
            if (extra > 0){
                newPrice += extra* this.price;
            }
            return Math.round(newPrice * 100)/100;
        }
        return Math.round((this.getQuantity()*this.price)*100)/100;
    }

    equals(accessory){
        return (this.name == accessory.name);
    }

    add(count){
        this.count += count;
    }

    getQuantity(){
        return Math.ceil(this.count/this.ctPerBox);
    }

    getPrice(){
        return this.price;
    }

    getName(){
        return this.name;
    }

    static screws2in(count, color){
        return new Accessory(color+" 2in Screws 1/4in Hex-Head (250ct)", count, 19.00, 250, 17.10, 10);
    }

    static screws1half(count, color){
        return new Accessory(color+" 1.5in Screws 1/4in Hex-Head (250ct)", count, 17.00, 250, 15.30, 10);
    }

    static caulk(color, quantity){
        return new Accessory("NovaFlex Roof Sealant 10.3 fl.oz. "+ color, quantity, 6.50);
    }

    static pancakeScrews1in(count){
        return new Accessory("Pancake Screws 1in (250ct", count, 15.00, 250, 10.80, 10);
    }

    static panCakeScrews1halfIn(count){
        return new Accessory("Pancake Screws 1.5in (250ct)", count, 18.00, 250, 12.60, 10);
    }

    static rivets(color, count){
        return new Accessory("#43 Stainless Steel Rivets " + color, parseInt(count), 12.00, 100);
    }
}

class Boot{
    constructor(size, isHiTemp, isSplit, color, quantity){
        this.size= size;
        this.isHiTemp = isHiTemp;
        this.isSplit = isSplit;
        if (isHiTemp || isSplit || ![3,4].includes(parseInt(size))){
            this.color = "Light Gray";
        } else {
            this.color = color;
        }
        this.quantity = parseInt(quantity);
        this.price = Boot.setPrice(size, isHiTemp, isSplit);
    }

    static setPrice(size, isHiTemp, isSplit){
        if (isSplit){
            return 25.00;
        }
        if (isHiTemp){
            switch(size){
                case '3':
                    return 22.00;
                case '4':
                    return 34.00;
                case '5':
                    return 38.00;
                case '6':
                    return 55.00;
                case '7':
                    return 65.00;
                case '8':
                    return 100.00;
                case '9':
                    return 180.00;
            }
        } else {
            switch (size){
                case '3':
                    return 12.00;
                case '4':
                    return 15.00;
                case '5':
                    return 15.00;
                case '6':
                    return 22.00;
                case '7':
                    return 30.00;
                case '8':
                    return 40.00;
                case '9':
                    return 60.00;
            }
        }
    }

    getColor(){
        if (!this.isHiTemp){
            if (this.size==='3'||this.size==='4'){
                return this.color;
            }
        }
        return "Gray";
    }

    add(count){
        Number(this.quantity) += Number(count);
    }

    getQuantity(){
        return this.quantity;
    }

    getName(){
        let name = '#' + this.size + ' ';
        if (this.isHiTemp){
            name += "Silicone";
        } else {
            name += 'EPDM';
        }
        if (this.isSplit){
            name += ' split';
        }
        name += " Pipe Boot " + this.getColor();
        return name;
    }

    getPrice(){
        return this.price;
    }

    getStackPrice(){
        return this.quantity * this.getPrice();
    }

    equals(boot){
        return this.getName() == boot.getName();
    }
}