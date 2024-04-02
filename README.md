---
import { getJSON } from 'fs'

const data = getJSON('../data/crowdstrikedetection.json')
---

<div class="overflow-x-auto">
  <table class="table-auto min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Field</th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <!-- Iterate over each record in the data -->
      {data.map(record => (
        <tr>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">ID</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.id}</td>
        </tr>
        <tr>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Customer ID</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.customer_id}</td>
        </tr>
        <!-- Add more fields here as needed -->
        <tr>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Notifications Type</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <!-- Iterate over each notification type -->
            {record.notifications.map(notification => (
              <div>{notification.type}</div>
            ))}
          </td>
        </tr>
        <!-- Add more fields with multiple records here as needed -->
      ))}
    </tbody>
  </table>
</div>






<table class="table-auto w-full text-left table-striped border-collapse border border-gray-400">
  <thead>
    <tr class="bg-gray-500 text-gray-100">
      <th class="px-4 py-2">Field</th>
      <th class="px-4 py-2">Value</th>
    </tr>
  </thead>
  <tbody>
    {each reportData in jsonData}
      <tr class="hover:bg-gray-100">
        <td class="px-4 py-2 border border-gray-400">{{ reportData.key }}</td>
        <td class="px-4 py-2 border border-gray-400">{{ reportData.value }}</td>
      </tr>
    {/each}
  </tbody>
</table>

<script>
  import { JSON } from '../path/to/your/data.json'; // Replace with path to your JSON file

  const jsonData = JSON;
</script>


<table class="table-auto w-full text-left table-striped border-collapse border border-gray-400">
  <thead>
    <tr class="bg-gray-500 text-gray-100">
      <th class="px-4 py-2">Field</th>
      <th class="px-4 py-2">Value</th>
    </tr>
  </thead>
  <tbody id="table-body">
  </tbody>
</table>

<script context="module">
  import jsonData from '../path/to/your/data.json'; // Replace with path to your JSON file
</script>

<script>
  // Iterate over jsonData and populate the table
  const tableBody = document.getElementById('table-body');
  jsonData.forEach(item => {
    const row = document.createElement('tr');
    row.classList.add('hover:bg-gray-100');

    const fieldCell = document.createElement('td');
    fieldCell.classList.add('px-4', 'py-2', 'border', 'border-gray-400');
    fieldCell.textContent = item.key;

    const valueCell = document.createElement('td');
    valueCell.classList.add('px-4', 'py-2', 'border', 'border-gray-400');
    valueCell.textContent = item.value;

    row.appendChild(fieldCell);
    row.appendChild(valueCell);

    tableBody.appendChild(row);
  });
</script>


