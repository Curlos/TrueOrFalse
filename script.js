document.getElementById('convert-json').addEventListener('click', () => {
    let firstString = document.getElementById('first-string').value.trim();
    let secondString = document.getElementById('second-string').value.trim();

    console.log([firstString]);
    console.log([secondString]);
});


const displayComparisonResult = () => {
    let comparisonResultDiv = document.getElementById('comparison-result');
    comparisonResultDiv.style.display = "block";
}