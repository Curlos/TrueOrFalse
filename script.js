document.getElementById('convert-json').addEventListener('click', () => {
    let firstString = document.getElementById('first-string').value.trim();
    let secondString = document.getElementById('second-string').value.trim();
    let comparisonOperator = document.getElementById('comparison-operator').value;

    let result = compareStrings(firstString, secondString, comparisonOperator);

    displayComparisonResult(result);
});


const displayComparisonResult = (result) => {
    let comparisonResultDiv = document.getElementById('comparison-result');
    comparisonResultDiv.style.display = "block";

    comparisonResultDiv.innerHTML = String(result).toUpperCase();
    changeResultCSS(result);
}

const changeResultCSS = (result) => {
    let comparisonResultDiv = document.getElementById('comparison-result');

    if (result == true) {
        if (comparisonResultDiv.classList.contains('false')) {
            comparisonResultDiv.classList.remove('false');
        }
        comparisonResultDiv.classList.add('true');

    } else if (result == false) {
        if (comparisonResultDiv.classList.contains('true')) {
            comparisonResultDiv.classList.remove('true');
        }
        comparisonResultDiv.classList.add('false');
    }
}

const compareStrings = (firstString, secondString, comparisonOperator) => {
    switch (comparisonOperator) {
        case "==":
            return firstString == secondString;
        case "===":
            return firstString === secondString;
        case "!=":
            return firstString != secondString;
        case "!==":
            return firstString !== secondString;
        case "<":
            return firstString < secondString;
        case ">":
            return firstString > secondString;
        case ">=":
            return firstString >= secondString;
        case "<=":
            return firstString <= secondString;
    }
}