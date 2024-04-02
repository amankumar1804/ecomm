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
--------------------

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CrowdStrike Falcon Reports</title>
    <!-- Include Astro Tailwind CSS -->
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 p-8">
    <div class="container mx-auto">
        <h1 class="text-2xl font-bold mb-4">CrowdStrike Falcon Reports</h1>
        <table class="table-auto">
            <thead>
                <tr>
                    <th class="px-4 py-2 bg-gray-200">ID</th>
                    <th class="px-4 py-2 bg-gray-200">Customer ID</th>
                </tr>
            </thead>
            <tbody id="reportTableBody">
                <!-- Table rows will be added dynamically here -->
            </tbody>
        </table>
    </div>

    <script>
        // Function to fetch data from JSON file and create table rows
        async function fetchDataAndCreateTable() {
            const response = await fetch('data/crowdstrikefalcon.json');
            const data = await response.json();

            const tableBody = document.getElementById('reportTableBody');
            data.forEach(entry => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td class="border px-4 py-2">${entry.id || ''}</td>
                    <td class="border px-4 py-2">${entry.customer_id || ''}</td>
                `;
                tableBody.appendChild(row);
            });
        }

        // Call the function to fetch data and create table rows
        fetchDataAndCreateTable();
    </script>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CrowdStrike Falcon Reports</title>
    <!-- Include Astro Tailwind CSS -->
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 p-8">
    <div class="container mx-auto">
        <h1 class="text-2xl font-bold mb-4">CrowdStrike Falcon Reports</h1>
        <table class="table-auto">
            <thead>
                <tr>
                    <th class="px-4 py-2 bg-gray-200">ID</th>
                    <th class="px-4 py-2 bg-gray-200">Customer ID</th>
                </tr>
            </thead>
            <tbody id="reportTableBody">
                <!-- Table rows will be added dynamically here -->
            </tbody>
        </table>
    </div>

    <script>
        // Define JSON data as a JavaScript object
        const jsonData = [
            {
                "id": "573568b0dcee4fe3b747ccdfb9a26a84",
                "customer_id": "9dab3dd4a8de4e46bc8988b5a8c88603"
            },
            // Add more data entries as needed
        ];

        // Function to create table rows from JSON data
        function createTableRows() {
            const tableBody = document.getElementById('reportTableBody');
            jsonData.forEach(entry => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td class="border px-4 py-2">${entry.id || ''}</td>
                    <td class="border px-4 py-2">${entry.customer_id || ''}</td>
                `;
                tableBody.appendChild(row);
            });
        }

        // Call the function to create table rows
        createTableRows();
    </script>
</body>
</html>



 -=-=-=-=-=-=-=-=-=
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CrowdStrike Falcon Report</title>
    <!-- Include Astro Tailwind CSS -->
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 p-8">
    <div class="container mx-auto">
        <h1 class="text-2xl font-bold mb-4">CrowdStrike Falcon Report</h1>
        <table class="table-auto">
            <thead>
                <tr>
                    <th class="px-4 py-2 bg-gray-200">Field</th>
                    <th class="px-4 py-2 bg-gray-200">Value</th>
                </tr>
            </thead>
            <tbody id="reportTableBody">
                <!-- Table rows will be added dynamically here -->
            </tbody>
        </table>
    </div>

    <script>
        // Define JSON data as a JavaScript object
        const jsonData = {
            "id": "573568b0dcee4fe3b747ccdfb9a26a84",
            "customer_id": "9dab3dd4a8de4e46bc8988b5a8c88603",
            "user_uuid": "6ff6787c-6f9a-4bf2-a229-6a553a0d009d",
            "user_id": "sowrab.m@lseg.com",
            "name": "WBMS CrowdStrike Sensor Report",
            "description": "This report is for Org-WBMS",
            "status": "ACTIVE",
            "type": "hosts",
            "schedule": {
                "definition": "0 12 * * 4",
                "display": "Weekly on Thursday at 12 PM (noon) UTC",
                "can_stagger": false
            },
            "created_on": "2024-01-23T17:16:46.45037667Z",
            "last_updated_on": "2024-02-29T12:00:44.0212124092",
            "last_execution": {
                "id": "060b3ce9d35245eea046f8138f386457",
                "last_updated_on": "2024-02-29T12:00:44.021212409Z",
                "execution_metadata": null,
                "status": "DONE",
                "status_display": "Success",
                "status_msg": ""
            },
            "next_execution_on": "2024-03-07T12:00:00Z",
            "start_on": "2024-01-24T00:00:007",
            "report_metadata": {
                "subtype": "",
                "last_unscheduled_execution": {
                    "id": "",
                    "activity_status": "",
                    "status_display": "",
                    "last_updated_ts": null
                },
                "created_by_uuid": "",
                "created_by_user_id": ""
            },
            "report_params": {
                "filter": "tags: 'SensorGroupingTags/Org-WBMS'",
                "filter_display": "tags: ' SensorGroupingTags/Org-WBMS'",
                "filter_ui": "tags: 'SensorGroupingTags/Org-WBMS'",
                "format": "csv",
                "sort": "",
                "dashboard_id": "",
                "dashboard_visibility": ""
            },
            "notifications": [
                {
                    "type": "email",
                    "config": {
                        "recipients": ["sowrab.m@lseg.com", "sarah.metcalfe@lseg.com"],
                        "plugin_id": "",
                        "config_id": "",
                        "cid": "",
                        "severity": ""
                    },
                    "options": {
                        "attach_report": "true"
                    }
                }
            ],
            "shared_with": [
                "74d9565d-30e2-46e6-9480-ed14ac271727",
                "6ff6787c-6f9a-4bf2-a229-6a553a0d009d"
            ]
        };

        // Function to create table rows from JSON data
        function createTableRows() {
            const tableBody = document.getElementById('reportTableBody');
            for (const [key, value] of Object.entries(jsonData)) {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td class="border px-4 py-2">${key}</td>
                    <td class="border px-4 py-2">${typeof value === 'object' ? JSON.stringify(value) : value}</td>
                `;
                tableBody.appendChild(row);
            }
        }

        // Call the function to create table rows
        createTableRows();
    </script>
</body>
</html>




