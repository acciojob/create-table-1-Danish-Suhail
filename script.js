function insert_Row() {
    //Write your code here
	const table = document.getElementById('sampleTable');
    
    // Insert a new row at index 0 (the very top of the table)
    const newRow = table.insertRow(0);
    
    // Insert the left cell and right cell into the new row
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    
    // Set the text content for each new cell
    cell1.textContent = 'New Cell1';
    cell2.textContent = 'New Cell2';
	
   
}
