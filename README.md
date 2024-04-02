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





{
    "id": "573568b0dcee4fe3b747ccdfb9a26a84",
    "customer_id": "9dab3dd4a8de4e46bc8988b5a8c88603",
    "user_uuid": "6ff6787c-6f9a-4bf2-a229-6a553a0d009d",
    "user_id": "sowrab.m@.com",
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
                "recipients": [
                    "sowrab.m@.com",
                    "sarah.@.com"
                ],
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
        "74d9565d-30e2--9480-",
        "6ff6787c-6f9a-4bf2--6a553a0d009d"
    ]
}


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

