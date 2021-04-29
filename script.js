document.getElementById('convert-json').addEventListener('click', () => {
    let firstString = document.getElementById('first-string').value.trim();
    let secondString = document.getElementById('second-string').value.trim();
    let comparisonOperator = document.getElementById('comparison-operator').value;

    console.log([firstString]);
    console.log([secondString]);
    console.log([comparisonOperator]);
});


const displayComparisonResult = () => {
    let comparisonResultDiv = document.getElementById('comparison-result');
    comparisonResultDiv.style.display = "block";
}