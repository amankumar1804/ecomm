
import re

def validate(input_value, type):
    patterns = {
        'url': r'^(https?://)?[a-z0-9-]+(\.[a-z0-9-]+)*\.([a-z]{2,})(:[0-9]{1,5})?(/.*)?$',
        'domain': r'^(?:[a-zA-Z0-9-]{1,63}\.)*(?:[a-zA-Z0-9-]{1,63}\.[a-zA-Z]{2,63})$',
        'ip': (r'^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}'
               r'(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$'
               r'|^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|'
               r'([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:'
               r'[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}'
               r'(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}'
               r'(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}'
               r'(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}'
               r'(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:'
               r'((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$'),
        'hash': r'^([a-f0-9]{32}|[a-f0-9]{40}|[a-f0-9]{64})$'
    }
    
    pattern = patterns.get(type.lower())
    if not pattern:
        raise ValueError("Invalid type specified. Choose from 'url', 'domain', 'ip', 'hash'")
    
    return re.match(pattern, input_value, re.IGNORECASE) is not None

# Example usage:
print("URL Valid:", validate("https://www.example.com", "url"))
print("Domain Valid:", validate("example.com", "domain"))
print("IP Valid:", validate("192.168.0.1", "ip"))
print("Hash Valid:", validate("5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8", "hash"))


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

-=-=-=-=-[][]-=-[][][-=-[][

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
                <tr id="headerRow"></tr>
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
            const headerRow = document.getElementById('headerRow');

            // Create table headers
            for (const key in jsonData) {
                const th = document.createElement('th');
                th.textContent = key;
                headerRow.appendChild(th);
            }

            // Create table row with values
            const row = document.createElement('tr');
            for (const key in jsonData) {
                const td = document.createElement('td');
                td.textContent = typeof jsonData[key] === 'object' ? JSON.stringify(jsonData[key]) : jsonData[key];
                row.appendChild(td);
            }
            tableBody.appendChild(row);
        }

        // Call the function to create table rows
        createTableRows();
    </script>
</body>
</html>
-=+++++++-=---=-=++++++++++++++++++++++++++++++-________-------------------



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
        <h1 class="text-3xl font-bold mb-8 text-center">CrowdStrike Falcon Report</h1>
        <div class="overflow-x-auto">
            <table class="table-auto border-collapse border border-gray-300 bg-white shadow-md rounded-lg">
                <thead>
                    <tr class="bg-gray-200">
                        <!-- Table headers -->
                        <th class="px-4 py-2 text-left">Field</th>
                        <th class="px-4 py-2 text-left">Value</th>
                    </tr>
                </thead>
                <tbody id="reportTableBody">
                    <!-- Table rows will be added dynamically here -->
                </tbody>
            </table>
        </div>
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
                    <td class="px-4 py-2 border border-gray-300">${key}</td>
                    <td class="px-4 py-2 border border-gray-300">${typeof value === 'object' ? JSON.stringify(value) : value}</td>
                `;
                tableBody.appendChild(row);
            }
        }

        // Call the function to create table rows
        createTableRows();
    </script>
</body>
</html>



--0-0-0-0-0-0-0-0-0-0-0-0-0(.)-(.)------=-==-=-=-=-=-=-=0-0-0--
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
        <h1 class="text-3xl font-bold mb-8 text-center">CrowdStrike Falcon Report</h1>
        <div class="overflow-x-auto">
            <table class="table-auto border-collapse border border-gray-300 bg-white shadow-md rounded-lg">
                <thead>
                    <tr class="bg-gray-200">
                        <!-- Table headers -->
                        <th class="px-4 py-2 text-left">Field</th>
                        <th class="px-4 py-2 text-left">Value</th>
                    </tr>
                </thead>
                <tbody id="reportTableBody">
                    <!-- Table rows will be added dynamically here -->
                </tbody>
            </table>
        </div>
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

            // Create table headers
            const headerRow = document.createElement('tr');
            headerRow.classList.add('bg-gray-200');
            headerRow.innerHTML = `
                <th class="px-4 py-2 text-left">Field</th>
                <th class="px-4 py-2 text-left">Value</th>
            `;
            tableBody.appendChild(headerRow);

            // Create table row with key-value pairs
            const dataRow = document.createElement('tr');
            for (const [key, value] of Object.entries(jsonData)) {
                const keyCell = document.createElement('td');
                const valueCell = document.createElement('td');
                keyCell.classList.add('px-4', 'py-2', 'border', 'border-gray-300', 'text-left');
                valueCell.classList.add('px-4', 'py-2', 'border', 'border-gray-300', 'text-left');
                keyCell.textContent = key;
                valueCell.textContent = typeof value === 'object' ? JSON.stringify(value) : value;
                dataRow.appendChild(keyCell);
                dataRow.appendChild(valueCell);
            }
            tableBody.appendChild(dataRow);
        }

        // Call the function to create table rows
        createTableRows();
    </script>
</body>
</html>




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
        <h1 class="text-3xl font-bold mb-8 text-center">CrowdStrike Falcon Report</h1>
        <div class="overflow-x-auto">
            <table class="table-auto border-collapse border border-gray-300 bg-white shadow-md rounded-lg">
                <tbody id="reportTableBody">
                    <!-- Table rows will be added dynamically here -->
                </tbody>
            </table>
        </div>
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
                const keyRow = document.createElement('tr');
                keyRow.innerHTML = `<td class="px-4 py-2 font-bold border border-gray-300">${key}</td>`;
                tableBody.appendChild(keyRow);

                const valueRow = document.createElement('tr');
                valueRow.innerHTML = `<td class="px-4 py-2 border border-gray-300">${value}</td>`;
                tableBody.appendChild(valueRow);
            }
        }

        // Call the function to create table rows
        createTableRows();
    </script>
</body>
</html>



----=-=-=-=---0-9090990)))()()())()()()------



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
        <h1 class="text-3xl font-bold mb-8 text-center">CrowdStrike Falcon Report</h1>
        <div class="overflow-x-auto">
            <table class="table-auto border-collapse border border-gray-300 bg-white shadow-md rounded-lg">
                <tbody id="reportTableBody">
                    <!-- Table rows will be added dynamically here -->
                </tbody>
            </table>
        </div>
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
            
            // Create table row with keys
            const keysRow = document.createElement('tr');
            for (const key in jsonData) {
                const keyCell = document.createElement('td');
                keyCell.classList.add('px-4', 'py-2', 'border', 'border-gray-300', 'text-left');
                keyCell.textContent = key;
                keysRow.appendChild(keyCell);
            }
            tableBody.appendChild(keysRow);
            
            // Create table row with values
            const valuesRow = document.createElement('tr');
            for (const key in jsonData) {
                const valueCell = document.createElement('td');
                valueCell.classList.add('px-4', 'py-2', 'border', 'border-gray-300', 'text-left');
                const value = typeof jsonData[key] === 'object' ? JSON.stringify(jsonData[key]) : jsonData[key];
                valueCell.textContent = value;
                valuesRow.appendChild(valueCell);
            }
            tableBody.appendChild(valuesRow);
        }

        // Call the function to create table rows
        createTableRows();
    </script>
</body>
</html>





-=-=-=-=-=-=-.m,m,m,m,m


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
        <h1 class="text-3xl font-bold mb-8 text-center">CrowdStrike Falcon Report</h1>
        <div class="overflow-x-auto">
            <table class="table-auto border-collapse border border-gray-300 bg-white shadow-md rounded-lg">
                <tbody id="reportTableBody">
                    <!-- Table rows will be added dynamically here -->
                </tbody>
            </table>
        </div>
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

            // Create table row with keys
            const keysRow = document.createElement('tr');
            for (const key in jsonData) {
                const keyCell = document.createElement('td');
                keyCell.classList.add('px-4', 'py-2', 'border', 'border-gray-300', 'text-left');
                keyCell.textContent = key;
                keysRow.appendChild(keyCell);
            }
            tableBody.appendChild(keysRow);

            // Create table row with values
            const valuesRow = document.createElement('tr');
            for (const key in jsonData) {
                const valueCell = document.createElement('td');
                valueCell.classList.add('px-4', 'py-2', 'border', 'border-gray-300', 'text-left');
                const value = typeof jsonData[key] === 'object' ? JSON.stringify(jsonData[key]) : jsonData[key];
                valueCell.textContent = value;
                valuesRow.appendChild(valueCell);
            }
            tableBody.appendChild(valuesRow);

            // Create button to toggle report_params visibility
            const toggleButton = document.createElement('button');
            toggleButton.textContent = 'Toggle report_params';
            toggleButton.classList.add('mt-4', 'px-4', 'py-2', 'bg-blue-500', 'text-white', 'rounded', 'shadow', 'cursor-pointer');
            toggleButton.onclick = toggleReportParams;
            tableBody.appendChild(toggleButton);

            // Create container for report_params details
            const paramsContainer = document.createElement('tr');
            paramsContainer.id = 'paramsContainer';
            tableBody.appendChild(paramsContainer);

            // Hide paramsContainer initially
            paramsContainer.style.display = 'none';
        }

        // Function to toggle report_params visibility
        function toggleReportParams() {
            const paramsContainer = document.getElementById('paramsContainer');
            paramsContainer.innerHTML = ''; // Clear previous content

            const reportParams = jsonData.report_params;
            for (const key in reportParams) {
                const paramRow = document.createElement('tr');
                const paramKeyCell = document.createElement('td');
                const paramValueCell = document.createElement('td');
                paramKeyCell.classList.add('px-4', 'py-2', 'border', 'border-gray-300', 'text-left');
                paramValueCell.classList.add('px-4', 'py-2', 'border', 'border-gray-300', 'text-left');
                paramKeyCell.textContent = key;
                paramValueCell.textContent = reportParams[key];
                paramRow.appendChild(paramKeyCell);
                paramRow.appendChild(paramValueCell);
                paramsContainer.appendChild(paramRow);
            }

            // Toggle visibility
            if (paramsContainer.style.display === 'none') {
                paramsContainer.style.display = 'table-row';
            } else {
                paramsContainer.style.display = 'none';
            }
        }

        // Call the function to create table rows
        createTableRows();
    </script>
</body>
</html>



-=-=-=-=-=-=-=-=---=-=-=-=-=-=


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
        <h1 class="text-3xl font-bold mb-8 text-center">CrowdStrike Falcon Report</h1>
        <div class="overflow-x-auto">
            <table class="table-auto border-collapse border border-gray-300 bg-white shadow-md rounded-lg">
                <tbody id="reportTableBody">
                    <!-- Table rows will be added dynamically here -->
                </tbody>
            </table>
        </div>
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
            
            // Create table row with keys
            const keysRow = document.createElement('tr');
            for (const key in jsonData) {
                const keyCell = document.createElement('td');
                keyCell.classList.add('px-4', 'py-2', 'border', 'border-gray-300', 'text-left');
                keyCell.textContent = key;
                keysRow.appendChild(keyCell);
            }
            tableBody.appendChild(keysRow);

            // Create table row with values
            const valuesRow = document.createElement('tr');
            for (const key in jsonData) {
                const valueCell = document.createElement('td');
                valueCell.classList.add('px-4', 'py-2', 'border', 'border-gray-300', 'text-left');
                const value = typeof jsonData[key] === 'object' ? JSON.stringify(jsonData[key]) : jsonData[key];
                valueCell.textContent = value;
                valuesRow.appendChild(valueCell);
            }
            tableBody.appendChild(valuesRow);

            // Create button to toggle report_params visibility
            const toggleButton = document.createElement('button');
            toggleButton.textContent = 'Toggle report_params';
            toggleButton.classList.add('mt-4', 'px-4', 'py-2', 'bg-blue-500', 'text-white', 'rounded', 'shadow', 'cursor-pointer');
            toggleButton.onclick = toggleReportParams;
            tableBody.appendChild(toggleButton);

            // Create container for report_params details
            const paramsContainer = document.createElement('tr');
            paramsContainer.id = 'paramsContainer';
            tableBody.appendChild(paramsContainer);

            // Hide paramsContainer initially
            paramsContainer.style.display = 'none';
        }

        // Function to toggle report_params visibility
        function toggleReportParams() {
            const paramsContainer = document.getElementById('paramsContainer');
            paramsContainer.innerHTML = ''; // Clear previous content

            const reportParams = jsonData.report_params;
            for (const key in reportParams) {
                const paramRow = document.createElement('tr');
                const paramKeyCell = document.createElement('td');
                const paramValueCell = document.createElement('td');
                paramKeyCell.classList.add('px-4', 'py-2', 'border', 'border-gray-300', 'text-left');
                paramValueCell.classList.add('px-4', 'py-2', 'border', 'border-gray-300', 'text-left');
                paramKeyCell.textContent = key;
                paramValueCell.textContent = reportParams[key];
                paramRow.appendChild(paramKeyCell);
                paramRow.appendChild(paramValueCell);
                paramsContainer.appendChild(paramRow);
            }

            // Toggle visibility
            if (paramsContainer.style.display === 'none') {
                paramsContainer.style.display = 'table-row';
            } else {
                paramsContainer.style.display = 'none';
            }
        }

        // Call the function to create table rows
        createTableRows();
    </script>
</body>
</html>


buttoonn0909090-=-=-=--=-=-=-=1-1-1--1=1-=1-1

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
        <h1 class="text-3xl font-bold mb-8 text-center">CrowdStrike Falcon Report</h1>
        <div class="overflow-x-auto">
            <table class="table-auto border-collapse border border-gray-300 bg-white shadow-md rounded-lg">
                <tbody id="reportTableBody">
                    <!-- Table rows will be added dynamically here -->
                </tbody>
            </table>
        </div>
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
            
            // Create table row with keys
            const keysRow = document.createElement('tr');
            for (const key in jsonData) {
                const keyCell = document.createElement('td');
                keyCell.classList.add('px-4', 'py-2', 'border', 'border-gray-300', 'text-left');
                keyCell.textContent = key;
                keysRow.appendChild(keyCell);
            }
            tableBody.appendChild(keysRow);

            // Create table row with values
            const valuesRow = document.createElement('tr');
            for (const key in jsonData) {
                const valueCell = document.createElement('td');
                valueCell.classList.add('px-4', 'py-2', 'border', 'border-gray-300', 'text-left');
                const value = typeof jsonData[key] === 'object' ? JSON.stringify(jsonData[key]) : jsonData[key];
                valueCell.textContent = value;
                valuesRow.appendChild(valueCell);
            }
            tableBody.appendChild(valuesRow);

            // Create buttons to toggle visibility of sections
            const sections = ['schedule', 'last_execution', 'report_metadata', 'report_params', 'notifications', 'shared_with'];
            sections.forEach(section => {
                const button = document.createElement('button');
                button.textContent = `Toggle ${section}`;
                button.classList.add('mt-4', 'px-4', 'py-2', 'bg-blue-500', 'text-white', 'rounded', 'shadow', 'cursor-pointer');
                button.onclick = () => toggleSectionVisibility(section);
                tableBody.appendChild(button);
            });

            // Create containers for section details
            sections.forEach(section => {
                const container = document.createElement('tr');
                container.id = `${section}Container`;
                tableBody.appendChild(container);
                container.style.display = 'none'; // Hide containers initially
            });
        }

        // Function to toggle section visibility
        function toggleSectionVisibility(section) {
            const container = document.getElementById(`${section}Container`);
            container.innerHTML = ''; // Clear previous content

            const sectionData = jsonData[section];
            if (typeof sectionData === 'object') {
                for (const [key, value] of Object.entries(sectionData)) {
                    const keyCell = document.createElement('td');
                    keyCell.classList.add('px-4', 'py-2', 'border', 'border-gray-300', 'text-left');
                    keyCell.textContent = key;

                    const valueCell = document.createElement('td');
                    valueCell.classList.add('px-4', 'py-2', 'border', 'border-gray-300', 'text-left');
                    valueCell.textContent = value;

                    const row = document.createElement('tr');
                    row.appendChild(keyCell);
                    row.appendChild(valueCell);

                    container.appendChild(row);
                }
            }

            // Toggle visibility
            container.style.display = container.style.display === 'none' ? 'table-row' : 'none';
        }

        // Call the function to create table rows
        createTableRows();
    </script>
</body>
</html>


-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=

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
        <h1 class="text-3xl font-bold mb-8 text-center">CrowdStrike Falcon Report</h1>
        <div class="overflow-x-auto">
            <table class="table-auto border-collapse border border-gray-300 bg-white shadow-md rounded-lg">
                <tbody id="reportTableBody">
                    <!-- Table rows will be added dynamically here -->
                </tbody>
            </table>
        </div>
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
            
            // Create table row with keys
            const keysRow = document.createElement('tr');
            for (const key in jsonData) {
                const keyCell = document.createElement('td');
                keyCell.classList.add('px-4', 'py-2', 'border', 'border-gray-300', 'text-left');
                keyCell.textContent = key;
                keysRow.appendChild(keyCell);
            }
            tableBody.appendChild(keysRow);
            
            // Create table row with toggle buttons
            const toggleRow = document.createElement('tr');
            for (const key in jsonData) {
                const toggleCell = document.createElement('td');
                toggleCell.classList.add('px-4', 'py-2', 'border', 'border-gray-300', 'text-left');
                if (typeof jsonData[key] === 'object') {
                    const toggleButton = document.createElement('button');
                    toggleButton.textContent = "Toggle";
                    toggleButton.classList.add('bg-blue-500', 'hover:bg-blue-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded');
                    toggleButton.onclick = function() {
                        toggleJson(key);
                    };
                    toggleCell.appendChild(toggleButton);
                } else {
                    toggleCell.textContent = "N/A";
                }
                toggleRow.appendChild(toggleCell);
            }
            tableBody.appendChild(toggleRow);
        }

        // Toggle JSON value display
        function toggleJson(key) {
            const value = jsonData[key];
            const displayValue = typeof value === 'object' ? JSON.stringify(value, null, 2) : value;
            alert(displayValue);
        }

        // Call the function to create table rows
        createTableRows();
    </script>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CrowdStrike Falcon Report</title>
    <!-- Include Astro Tailwind CSS -->
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        .collapsible {
            background-color: #777;
            color: white;
            cursor: pointer;
            padding: 18px;
            width: 100%;
            border: none;
            text-align: left;
            outline: none;
            font-size: 15px;
        }

        .active, .collapsible:hover {
            background-color: #555;
        }

        .collapsible:after {
            content: '\002B';
            color: white;
            font-weight: bold;
            float: right;
            margin-left: 5px;
        }

        .active:after {
            content: "\2212";
        }

        .content {
            padding: 0 18px;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.2s ease-out;
            background-color: #f1f1f1;
        }
    </style>
</head>
<body class="bg-gray-100 p-8">
    <div class="container mx-auto">
        <h1 class="text-3xl font-bold mb-8 text-center">CrowdStrike Falcon Report</h1>
        <div class="overflow-x-auto">
            <table class="table-auto border-collapse border border-gray-300 bg-white shadow-md rounded-lg">
                <tbody id="reportTableBody">
                    <!-- Table rows will be added dynamically here -->
                </tbody>
            </table>
        </div>
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
            "created_on": "2024-01-23T17:16:46.45037667Z",
            "last_updated_on": "2024-02-29T12:00:44.0212124092",
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
            }
        };

        // Function to create table rows from JSON data
        function createTableRows() {
            const tableBody = document.getElementById('reportTableBody');

            // Create table rows with keys and toggle buttons
            for (const key in jsonData) {
                const row = document.createElement('tr');
                const contentRow = document.createElement('tr');
                row.innerHTML = `
                    <td class="px-4 py-2 border border-gray-300 text-left">${key}</td>
                    <td class="px-4 py-2 border border-gray-300 text-left">
                        <button class="collapsible bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">Toggle</button>
                    </td>
                `;
                tableBody.appendChild(row);

                const value = typeof jsonData[key] === 'object' ? JSON.stringify(jsonData[key], null, 2) : jsonData[key];
                contentRow.innerHTML = `
                    <td class="px-4 py-2 border border-gray-300 text-left" colspan="2">
                        <div class="content hidden">
                            <pre>${value}</pre>
                        </div>
                    </td>
                `;
                tableBody.appendChild(contentRow);
            }

            // Add click event listeners to toggle buttons
            const collapsibles = document.querySelectorAll('.collapsible');
            collapsibles.forEach(collapsible => {
                collapsible.addEventListener('click', function() {
                    this.classList.toggle('active');
                    const content = this.parentElement.nextElementSibling.querySelector('.content');
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = content.scrollHeight + 'px';
                    }
                });
            });
        }

        // Call the function to create table rows
        createTableRows();
    </script>
</body>
</html>
-=-=-=-=++++-=-=-=-=-=-=
    function createTableRows() {
        const tableBody = document.getElementById('reportTableBody');

        // Create table row for keys and values
        for (const key in jsonData) {
            const keyCell = document.createElement('td');
            const valueCell = document.createElement('td');
            keyCell.classList.add('px-4', 'py-2', 'border', 'border-gray-300', 'text-left');
            valueCell.classList.add('px-4', 'py-2', 'border', 'border-gray-300', 'text-left');
            keyCell.textContent = key;
            const value = typeof jsonData[key] === 'object' ? JSON.stringify(jsonData[key]) : jsonData[key];
            valueCell.textContent = value;
            const row = document.createElement('tr');
            row.appendChild(keyCell);
            row.appendChild(valueCell);
            tableBody.appendChild(row);
        }
    }

    // Call the function to create table rows
    createTableRows();
</script>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CrowdStrike Falcon Report</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        .collapsible {
            background-color: #777;
            color: white;
            cursor: pointer;
            padding: 18px;
            width: 100%;
            border: none;
            text-align: left;
            outline: none;
            font-size: 15px;
        }

        .active, .collapsible:hover {
            background-color: #555;
        }

        .collapsible:after {
            content: '\002B';
            color: white;
            font-weight: bold;
            float: right;
            margin-left: 5px;
        }

        .active:after {
            content: "\2212";
        }

        .content {
            padding: 0 18px;
            display: none; /* Initially hide content */
            overflow: hidden;
            transition: max-height 0.2s ease-out;
            background-color: #f1f1f1;
        }
    </style>
</head>
<body class="bg-gray-100 p-8">
    <div class="container mx-auto">
        <h1 class="text-3xl font-bold mb-8 text-center">CrowdStrike Falcon Report</h1>
        <div class="overflow-x-auto">
            <table class="table-auto border-collapse border border-gray-300 bg-white shadow-md rounded-lg">
                <tbody id="reportTableBody">
                    <!-- Table rows will be added dynamically here -->
                </tbody>
            </table>
        </div>
    </div>

    <script>
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


        function createTableRows() {
            const tableBody = document.getElementById('reportTableBody');
            const collapsibleKeys = ['schedule', 'last_execution', 'report_metadata', 'report_params', 'notifications', 'shared_with'];

            for (const key in jsonData) {
                const row = document.createElement('tr');
                const cell = document.createElement('td');
                cell.classList.add('border', 'border-gray-300', 'px-4', 'py-2', 'text-left', 'w-full');
                row.appendChild(cell);

                if (collapsibleKeys.includes(key)) {
                    const button = document.createElement('button');
                    button.textContent = key;
                    button.classList.add('collapsible');
                    
                    const contentDiv = document.createElement('div');
                    contentDiv.classList.add('content');
                    const pre = document.createElement('pre');
                    pre.textContent = JSON.stringify(jsonData[key], null, 2);
                    contentDiv.appendChild(pre);

                    // Place contentDiv directly after the button inside the cell
                    button.appendChild(contentDiv);
                    cell.appendChild(button);
                    tableBody.appendChild(row);
                } else {
                    cell.textContent = `${key}: ${jsonData[key]}`;
                    tableBody.appendChild(row);
                }
            }

            var coll = document.getElementsByClassName("collapsible");
            for (let i = 0; i < coll.length; i++) {
                coll[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    var content = this.querySelector('.content');
                    if (content.style.display === "none") {
                        content.style.display = "block";
                        content.style.maxHeight = content.scrollHeight + "px";
                    } else {
                        content.style.display = "none";
                        content.style.maxHeight = null;
                    }
                });
            }
        }

        createTableRows();
    </script>
</body>
</html>

#collapseButton {
    background-color: blue; /* Standard blue */
    color: white; /* White text color for better readability */
    border: none; /* Removes the default border */
    padding: 10px 20px; /* Adds some padding for visual appeal */
    cursor: pointer; /* Changes cursor to pointer on hover */
}

#collapseButton:hover {
    background-color: darkblue; /* Darker blue on hover for visual feedback */
}




-=-=best code-=-=-=-=
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CrowdStrike Falcon Report</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        .collapsible {
            background-color: #777;
            color: white;
            cursor: pointer;
            padding: 18px;
            border: none;
            text-align: left;
            outline: none;
            font-size: 15px;
            margin-left: 10px; /* Add some space between the key name and button */
        }

        .active, .collapsible:hover {
            background-color: #555;
        }

        .collapsible:after {
            content: '\002B';
            color: white;
            font-weight: bold;
            float: right;
            margin-left: 5px;
        }

        .active:after {
            content: "\2212";
        }

        .content {
            padding: 18px;
            display: none; /* Initially hide content */
            background-color: #f1f1f1;
            overflow: hidden;
            transition: max-height 0.2s ease-out;
        }

        .nested-table {
            width: 100%;
            border-collapse: collapse;
        }

        .nested-table, .nested-table th, .nested-table td {
            border: 1px solid #ddd;
        }

        .nested-table th, .nested-table td {
            padding: 8px;
            text-align: left;
        }

        .nested-table th {
            background-color: #f3f3f3;
        }
    </style>
</head>
<body class="bg-gray-100 p-8">
    <div class="container mx-auto">
        <h1 class="text-3xl font-bold mb-8 text-center">CrowdStrike Falcon Report</h1>
        <div class="overflow-x-auto">
            <table class="table-auto border-collapse border border-gray-300 bg-white shadow-md rounded-lg">
                <tbody id="reportTableBody">
                    <!-- Table rows will be added dynamically here -->
                </tbody>
            </table>
        </div>
    </div>

    <script>
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


        function createNestedTable(data) {
            const table = document.createElement('table');
            table.className = 'nested-table';
            
            for (const key in data) {
                const row = table.insertRow(-1);
                const cellKey = row.insertCell(0);
                const cellValue = row.insertCell(1);
                cellKey.textContent = key;
                
                // Check if the value is an object and stringify if necessary
                cellValue.textContent = typeof data[key] === 'object' ? JSON.stringify(data[key], null, 2) : data[key];
            }
            return table;
        }

        function createTableRows() {
            const tableBody = document.getElementById('reportTableBody');
            const collapsibleKeys = ['schedule', 'last_execution', 'report_metadata', 'report_params', 'notifications', 'shared_with'];

            for (const key in jsonData) {
                const row = document.createElement('tr');
                const cell = document.createElement('td');
                cell.classList.add('border', 'border-gray-300', 'px-4', 'py-2', 'text-left', 'w-full');
                row.appendChild(cell);

                if (collapsibleKeys.includes(key)) {
                    const keySpan = document.createElement('span');
                    keySpan.textContent = key + ": ";
                    cell.appendChild(keySpan);

                    const button = document.createElement('button');
                    button.textContent = "Toggle";
                    button.classList.add('collapsible');
                    cell.appendChild(button);
                    
                    const contentDiv = document.createElement('div');
                    contentDiv.classList.add('content');
                    const nestedTable = createNestedTable(jsonData[key]);
                    contentDiv.appendChild(nestedTable);
                    cell.appendChild(contentDiv);
                    tableBody.appendChild(row);
                } else {
                    cell.textContent = `${key}: ${jsonData[key]}`;
                    tableBody.appendChild(row);
                }
            }

            var coll = document.getElementsByClassName("collapsible");
            for (let i = 0; i < coll.length; i++) {
                coll[i].addEventListener("click", function() {
                    this.nextElementSibling.style.display = this.nextElementSibling.style.display === "block" ? "none" : "block";
                    this.classList.toggle("active");
                });
            }
        }

        createTableRows();
    </script>
</body>
</html>



-=-=-=-=-=-==+++_=-=-=-=-=-=-=+++++-=-=-==-=-=-=-==-=-=



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nested Table JSON Data Display</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        .collapsible {
            background-color: #777;
            color: white;
            cursor: pointer;
            padding: 18px;
            width: 100%;
            border: none;
            text-align: left;
            outline: none;
            font-size: 15px;
        }

        .active, .collapsible:hover {
            background-color: #555;
        }

        .content {
            padding: 0 18px;
            display: none;
            overflow: hidden;
            background-color: #f1f1f1;
            transition: max-height 0.2s ease-out;
        }

        .nested-table {
            border-collapse: collapse;
            width: 100%;
            margin-top: 10px;
        }

        .nested-table, .nested-table th, .nested-table td {
            border: 1px solid #ddd;
        }

        .nested-table th, .nested-table td {
            padding: 8px;
            text-align: left;
        }

        .nested-table th {
            background-color: #f3f3f3;
        }
    </style>
</head>
<body>
    <div class="container mx-auto">
        <h1 class="text-3xl font-bold mb-8 text-center">JSON Data Display with Nested Tables</h1>
        <table class="min-w-full table-auto border-collapse border border-gray-300">
            <thead class="bg-gray-200"></thead>
            <tbody></tbody>
        </table>
    </div>

    <script>
        const jsonData = [
{
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
        },



{
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
        }
        ];

        const toggleKeys = ['schedule', 'last_execution', 'report_metadata', 'report_params', 'notifications', 'shared_with'];
        const tableHead = document.querySelector("table thead");
        const tableBody = document.querySelector("table tbody");

        // Create header row
        const headerRow = document.createElement("tr");
        Object.keys(jsonData[0]).forEach(key => {
            const th = document.createElement("th");
            th.textContent = key;
            headerRow.appendChild(th);
        });
        tableHead.appendChild(headerRow);

        // Create rows for JSON data
        jsonData.forEach(obj => {
            const row = document.createElement("tr");
            Object.keys(obj).forEach(key => {
                const cell = document.createElement("td");

                if (toggleKeys.includes(key)) {
                    const button = document.createElement("button");
                    button.textContent = "Details";
                    button.className = "collapsible";

                    const contentDiv = document.createElement("div");
                    contentDiv.className = "content";

                    // Create a nested table for the collapsible content
                    const nestedTable = document.createElement("table");
                    nestedTable.className = "nested-table";

                    const data = obj[key];
                    if (typeof data === "object" && !Array.isArray(data)) {
                        Object.entries(data).forEach(([k, v]) => {
                            const row = nestedTable.insertRow();
                            const keyCell = row.insertCell();
                            keyCell.textContent = k;
                            const valueCell = row.insertCell();
                            valueCell.textContent = JSON.stringify(v, null, 2);
                        });
                    } else {
                        // Handle arrays or other non-object data types
                        const row = nestedTable.insertRow();
                        const cell = row.insertCell();
                        cell.textContent = JSON.stringify(data, null, 2);
                        cell.colSpan = 2;
                    }

                    contentDiv.appendChild(nestedTable);
                    button.addEventListener("click", function() {
                        this.classList.toggle("active");
                        const content = this.nextElementSibling;
                        content.style.display = content.style.display === "block" ? "none" : "block";
                    });

                    cell.appendChild(button);
                    cell.appendChild(contentDiv);
                } else {
                    cell.textContent = typeof obj[key] === "object" ? "Object" : obj[key];
                }

                row.appendChild(cell);
            });
            tableBody.appendChild(row);
        });
    </script>
</body>
</html>



-=-=-=-=with nce css design -=-=-=-=


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Horizontal Report Details Display</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        .collapsible, .nested-collapsible {
            background-color: DodgerBlue; /* Changed to DodgerBlue */
            color: white;
            cursor: pointer;
            padding: 12px;
            border: none;
            text-align: left;
            outline: none;
            font-size: 14px;
            display: block; /* Ensure it's clearly visible and accessible */
            width: 100%; /* Elongated to fill the container horizontally */
            box-sizing: border-box; /* Ensures padding is included in width */
            margin-top: 5px;
        }

        .active, .collapsible:hover, .nested-collapsible:hover {
            background-color: #1E90FF; /* A lighter shade of DodgerBlue for hover/active state */
        }

        .content, .nested-content {
            padding: 0 18px;
            display: none;
            overflow: hidden;
            background-color: #f1f1f1;
            transition: max-height 0.2s ease-out;
            width: 100%; /* Ensure content also fills the container horizontally */
            box-sizing: border-box; /* Ensures padding is included in width */
        }

        table, .nested-table {
            border-collapse: collapse;
            width: 100%; /* Ensures tables fill their containers */
            margin-top: 10px;
        }

        th, td, .nested-table th, .nested-table td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }

        th, .nested-table th {
            background-color: #f3f3f3;
        }
    </style>
</head>
<body>
    <div class="container mx-auto">
        <h1 class="text-3xl font-bold mb-8 text-center">Enhanced ID-Based Report Details</h1>
        <div id="jsonContainer"></div>
    </div>

    <script>
        const jsonData = [
            // Your JSON data array here
        ];

        const detailedKeys = ['schedule', 'last_execution', 'report_metadata', 'report_params', 'notifications', 'shared_with'];
        const container = document.getElementById('jsonContainer');

        jsonData.forEach((report, index) => {
            const reportButton = document.createElement('button');
            reportButton.textContent = report.id ? `Details for ID: ${report.id}` : 'Details (ID not found)';
            reportButton.className = 'collapsible';

            const reportContent = document.createElement('div');
            reportContent.className = 'content';

            const reportTable = document.createElement('table');
            reportContent.appendChild(reportTable);
            container.appendChild(reportButton);
            container.appendChild(reportContent);

            reportButton.addEventListener('click', function() {
                this.classList.toggle("active");
                reportContent.style.display = reportContent.style.display === 'block' ? 'none' : 'block';
            });

            Object.entries(report).forEach(([key, value]) => {
                const row = reportTable.insertRow();
                const keyCell = row.insertCell();
                keyCell.textContent = key;

                const valueCell = row.insertCell();

                if (detailedKeys.includes(key) && typeof value === 'object') {
                    const detailButton = document.createElement('button');
                    detailButton.textContent = `Toggle ${key}`;
                    detailButton.className = 'nested-collapsible';

                    const detailContent = document.createElement('div');
                    detailContent.className = 'nested-content';

                    const nestedTable = document.createElement('table');
                    nestedTable.className = 'nested-table';

                    Object.entries(value).forEach(([nestedKey, nestedValue]) => {
                        const nestedRow = nestedTable.insertRow();
                        const nestedKeyCell = nestedRow.insertCell();
                        nestedKeyCell.textContent = nestedKey;
                        const nestedValueCell = nestedRow.insertCell();
                        nestedValueCell.textContent = JSON.stringify(nestedValue, null, 2);
                    });

                    detailButton.onclick = function() {
                        this.classList.toggle("active");
                        detailContent.style.display = detailContent.style.display === 'block' ? 'none' : 'block';
                    };

                    detailContent.appendChild(nestedTable);
                    valueCell.appendChild(detailButton);
                    valueCell.appendChild(detailContent);
                } else {
                    valueCell.textContent = JSON.stringify(value, null, 2);
                }
            });
        });
    </script>
</body>
</html>



-=-=-=search-=-=-=-
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Horizontal Report Details Display</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        .collapsible, .nested-collapsible {
            background-color: DodgerBlue;
            color: white;
            cursor: pointer;
            padding: 12px;
            border: none;
            text-align: left;
            outline: none;
            font-size: 14px;
            display: block;
            width: 100%;
            box-sizing: border-box;
            margin-top: 5px;
        }

        .active, .collapsible:hover, .nested-collapsible:hover {
            background-color: #1E90FF;
        }

        .content, .nested-content {
            padding: 0 18px;
            display: none;
            overflow: hidden;
            background-color: #f1f1f1;
            transition: max-height 0.2s ease-out;
            width: 100%;
            box-sizing: border-box;
        }

        table, .nested-table {
            border-collapse: collapse;
            width: 100%;
            margin-top: 10px;
        }

        th, td, .nested-table th, .nested-table td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }

        th, .nested-table th {
            background-color: #f3f3f3;
        }

        input[type="text"] {
            padding: 8px;
            width: 100%;
            margin-bottom: 12px;
        }
    </style>
</head>
<body>
    <div class="container mx-auto">
        <h1 class="text-3xl font-bold mb-8 text-center">Enhanced ID-Based Report Details</h1>
        <input type="text" id="searchInput" placeholder="Search by Name..." onkeyup="filterReports()">
        <div id="jsonContainer"></div>
    </div>

    <script>
        const jsonData = [{
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
        },



{
            "id": "573568b0dcee4fe3b747ccdfb9a26a84",
            "customer_id": "9dab3dd4a8de4e46bc8988b5a8c88603",
            "user_uuid": "6ff6787c-6f9a-4bf2-a229-6a553a0d009d",
            "user_id": "sowrab.m@lseg.com",
            "name": "NITISH",
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
        }
];

        const detailedKeys = ['schedule', 'last_execution', 'report_metadata', 'report_params', 'notifications', 'shared_with'];
        const container = document.getElementById('jsonContainer');

        jsonData.forEach((report, index) => {
            const reportButton = document.createElement('button');
            reportButton.textContent = report.name ? `${report.name} (ID: ${report.id})` : 'Unnamed Report';
            reportButton.className = 'collapsible';
            reportButton.dataset.name = report.name.toLowerCase(); // For searching by name

            const reportContent = document.createElement('div');
            reportContent.className = 'content';

            const reportTable = document.createElement('table');
            reportContent.appendChild(reportTable);

            Object.entries(report).forEach(([key, value]) => {
                const row = reportTable.insertRow();
                const keyCell = row.insertCell();
                keyCell.textContent = key;

                const valueCell = row.insertCell();
                if (detailedKeys.includes(key) && typeof value === 'object') {
                    const detailButton = document.createElement('button');
                    detailButton.textContent = `Toggle ${key}`;
                    detailButton.className = 'nested-collapsible';

                    const detailContent = document.createElement('div');
                    detailContent.className = 'nested-content';

                    const nestedTable = document.createElement('table');
                    nestedTable.className = 'nested-table';
                    Object.entries(value).forEach(([nestedKey, nestedValue]) => {
                        const nestedRow = nestedTable.insertRow();
                        const nestedKeyCell = nestedRow.insertCell();
                        nestedKeyCell.textContent = nestedKey;
                        const nestedValueCell = nestedRow.insertCell();
                        nestedValueCell.textContent = JSON.stringify(nestedValue, null, 2);
                    });

                    detailButton.onclick = function() {
                        this.classList.toggle("active");
                        detailContent.style.display = detailContent.style.display === 'block' ? 'none' : 'block';
                    };

                    detailContent.appendChild(nestedTable);
                    valueCell.appendChild(detailButton);
                    valueCell.appendChild(detailContent);
                } else {
                    valueCell.textContent = JSON.stringify(value, null, 2);
                }
            });

            container.appendChild(reportButton);
            container.appendChild(reportContent);

            reportButton.addEventListener('click', function() {
                this.classList.toggle("active");
                reportContent.style.display = reportContent.style.display === 'block' ? 'none' : 'block';
            });
        });

        function filterReports() {
            const input = document.getElementById('searchInput');
            const filter = input.value.toLowerCase();
            const buttons = container.getElementsByTagName('button');
            for (let i = 0; i < buttons.length; i++) {
                let name = buttons[i].dataset.name;
                if (name.indexOf(filter) > -1) {
                    buttons[i].style.display = "";
                    buttons[i].nextElementSibling.style.display = buttons[i].classList.contains('active') ? "block" : "none";
                } else {
                    buttons[i].style.display = "none";
                    buttons[i].nextElementSibling.style.display = "none";
                }
            }
        }
    </script>
</body>
</html>


[][]]\\]\]][]][[]][]]



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Horizontal Report Details Display</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        .collapsible, .nested-collapsible {
            background-color: DodgerBlue;
            color: white;
            cursor: pointer;
            padding: 12px;
            border: none;
            text-align: left;
            outline: none;
            font-size: 14px;
            display: block;
            width: 100%;
            box-sizing: border-box;
            margin-top: 5px;
        }
        .active, .collapsible:hover, .nested-collapsible:hover {
            background-color: #1E90FF;
        }
        .content, .nested-content {
            padding: 0 18px;
            display: none;
            overflow: hidden;
            background-color: #f1f1f1;
            transition: max-height 0.2s ease-out;
            width: 100%;
            box-sizing: border-box;
        }
        table, .nested-table {
            border-collapse: collapse;
            width: 100%;
            margin-top: 10px;
        }
        th, td, .nested-table th, .nested-table td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th, .nested-table th {
            background-color: #f3f3f3;
        }
        input[type="text"] {
            padding: 8px;
            width: 100%;
            margin-bottom: 12px;
        }
    </style>
</head>
<body>
    <div class="container mx-auto">
        <h1 class="text-3xl font-bold mb-8 text-center">Enhanced ID-Based Report Details</h1>
        <input type="text" id="searchInput" placeholder="Search by Name..." onkeyup="filterReports()">
        <div id="jsonContainer"></div>
    </div>

    <script>
        fetch('data.json')
        .then(response => response.json())
        .then(jsonData => {
            const detailedKeys = ['schedule', 'last_execution', 'report_metadata', 'report_params', 'notifications', 'shared_with'];
            const container = document.getElementById('jsonContainer');
            jsonData.forEach((report, index) => {
                const reportButton = document.createElement('button');
                reportButton.textContent = report.name ? `${report.name} (ID: ${report.id})` : 'Unnamed Report';
                reportButton.className = 'collapsible';
                reportButton.dataset.name = report.name.toLowerCase();

                const reportContent = document.createElement('div');
                reportContent.className = 'content';

                const reportTable = document.createElement('table');
                reportContent.appendChild(reportTable);

                Object.entries(report).forEach(([key, value]) => {
                    const row = reportTable.insertRow();
                    const keyCell = row.insertCell();
                    keyCell.textContent = key;
                    const valueCell = row.insertCell();
                    if (detailedKeys.includes(key) && typeof value === 'object') {
                        const detailButton = document.createElement('button');
                        detailButton.textContent = `Toggle ${key}`;
                        detailButton.className = 'nested-collapsible';

                        const detailContent = document.createElement('div');
                        detailContent.className = 'nested-content';
                        const nestedTable = document.createElement('table');
                        nestedTable.className = 'nested-table';
                        Object.entries(value).forEach(([nestedKey, nestedValue]) => {
                            const nestedRow = nestedTable.insertRow();
                            const nestedKeyCell = nestedRow.insertCell();
                            nestedKeyCell.textContent = nestedKey;
                            const nestedValueCell = nestedRow.insertCell();
                            nestedValueCell.textContent = JSON.stringify(nestedValue, null, 2);
                        });

                        detailButton.onclick = function() {
                            this.classList.toggle("active");
                            detailContent.style.display = detailContent.style.display === 'block' ? 'none' : 'block';
                        };

                        detailContent.appendChild(nestedTable);
                        valueCell.appendChild(detailButton);
                        valueCell.appendChild(detailContent);
                    } else {
                        valueCell.textContent = JSON.stringify(value, null, 2);
                    }
                });

                container.appendChild(reportButton);
                container.appendChild(reportContent);

                reportButton.addEventListener('click', function() {
                    this.classList.toggle("active");
                    reportContent.style.display = reportContent.style.display === 'block' ? 'none' : 'block';
                });
            });
        });

        function filterReports() {
            const input = document.getElementById('searchInput');
            const filter = input.value.toLowerCase();
            const buttons = container.getElementsByTagName('button');
            for (let i = 0; i < buttons.length; i++) {
                let name = buttons[i].dataset.name;
                if (name.indexOf(filter) > -1) {
                    buttons[i].style.display = "";
                    buttons[i].nextElementSibling.style.display = buttons[i].classList.contains('active') ? "block" : "none";
                } else {
                    buttons[i].style.display = "none";
                    buttons[i].nextElementSibling.style.display = "none";
                }
            }
        }
    </script>
</body>
</html>







