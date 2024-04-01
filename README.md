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
