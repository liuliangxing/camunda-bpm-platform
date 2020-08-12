/*
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information regarding copyright
 * ownership. Camunda licenses this file to you under the Apache License,
 * Version 2.0; you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = `<!-- # CE - camunda-bpm-webapp/webapp/src/main/resources-plugin/decisionList/app/views/decisionDefinition/decision-instance-table.html -->
<div cam-searchable-area
     config="searchConfig"
     array-types="['activityIdIn', 'activityInstanceIdIn']"
     variable-types="['variableValues']"
     on-search-change="onSearchChange(query, pages)"
     loading-state="loadingState"
     text-empty="{{ 'PLUGIN_DECISION_TABLE_NOT_FOUND' | translate }}"
     storage-group="'DI'">

  <table class="decision-instances cam-table cam-fixed-layout">

    <thead sortable-table-head
           head-columns="headColumns"
           on-sort-change="onSortChange(searchQuery, pages, sortObj)"
           default-sort="sortObj">
    </thead>

    <tbody>
      <tr ng-repeat="decisionInstance in decisionInstances">
        <td class="instance-id"
            cam-widget-clipboard="decisionInstance.id">
          <a ng-href="#/decision-instance/{{ decisionInstance.id }}" title="{{ decisionInstance.id }}">
            {{ decisionInstance.id }}
          </a>
        </td>

        <td class="start-time"
            cam-widget-clipboard="decisionInstance.evaluationTime | camDate">
          {{ decisionInstance.evaluationTime | camDate }}
        </td>

        <td class="definition-key"
            ng-if="decisionInstance.processDefinitionKey"
            cam-widget-clipboard="decisionInstance.processDefinitionKey">
          <a ng-href="{{ getProcessDefinitionLink(decisionInstance) }}">
            {{ decisionInstance.processDefinitionKey }}
          </a>
        </td>
        <td class="definition-key"
            ng-if="decisionInstance.caseDefinitionKey"
            cam-widget-clipboard="decisionInstance.caseDefinitionKey">
          <a ng-if="hasCasePlugin"
             ng-href="#/case-definition/{{ decisionInstance.caseDefinitionId }}?searchQuery={{ getActivitySearch(decisionInstance) }}">
            {{ decisionInstance.caseDefinitionKey }}
          </a>
          <span ng-if="!hasCasePlugin">
            {{ decisionInstance.caseDefinitionKey }}
          </span>
        </td>
        <td class="definition-key"
            ng-if="!decisionInstance.processDefinitionKey && !decisionInstance.caseDefinitionKey">
        </td>

        <td class="instance-id"
            ng-if="decisionInstance.processInstanceId"
            cam-widget-clipboard="decisionInstance.processInstanceId">
          <a ng-href="{{ getProcessInstanceLink(decisionInstance) }}">
            {{ decisionInstance.processInstanceId }}
          </a>
        </td>
        <td class="instance-id"
            ng-if="decisionInstance.caseInstanceId"
            cam-widget-clipboard="decisionInstance.caseInstanceId">
          <a ng-if="hasCasePlugin"
             ng-href="#/case-instance/{{ decisionInstance.caseInstanceId }}?searchQuery={{ getActivitySearch(decisionInstance) }}">
            {{ decisionInstance.caseInstanceId }}
          </a>
          <span ng-if="!hasCasePlugin">
            {{ decisionInstance.caseInstanceId }}
          </span>
        </td>
        <td class="instance-id"
            ng-if="!decisionInstance.processInstanceId && !decisionInstance.caseInstanceId">
        </td>

        <td class="activity-id"
            ng-if="decisionInstance.activityId"
            cam-widget-clipboard="decisionInstance.activityId">
          {{ decisionInstance.activityId }}
        </td>
        <td class="activity-id"
            ng-if="!decisionInstance.activityId">
        </td>

      </tr>
    </tbody>
  </table>
</div>
<!-- / CE - camunda-bpm-webapp/webapp/src/main/resources-plugin/decisionList/app/views/decisionDefinition/decision-instance-table.html -->
`;
