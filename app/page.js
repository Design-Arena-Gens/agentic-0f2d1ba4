'use client';

import { useState } from 'react';

export default function SAPHanaTutorial() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  const steps = [
    {
      title: "Introduction to SAP Fiori Tiles and T-codes",
      content: `
        <h3>What You'll Learn</h3>
        <p>In this tutorial, you'll learn how to create a Fiori tile in SAP HANA and assign it to a Transaction Code (T-code). This is essential for creating custom applications accessible through the SAP Fiori Launchpad.</p>

        <h3>Prerequisites</h3>
        <ul>
          <li>Access to SAP HANA system with appropriate authorizations</li>
          <li>Basic understanding of SAP navigation</li>
          <li>Authorization to use transaction codes like /UI2/FLPD_CUST or /UI2/FLP</li>
        </ul>

        <h3>Key Concepts</h3>
        <div class="concept-box">
          <h4>Fiori Tile</h4>
          <p>A visual element in the Fiori Launchpad that provides quick access to applications, reports, or transactions. Tiles can be static or dynamic, displaying real-time information.</p>
        </div>

        <div class="concept-box">
          <h4>T-code (Transaction Code)</h4>
          <p>A shortcut command in SAP that executes a specific function or program. Examples: SE38 (ABAP Editor), VA01 (Create Sales Order).</p>
        </div>

        <div class="concept-box">
          <h4>Catalog</h4>
          <p>A container that groups related tiles together. Users can subscribe to catalogs to access tiles.</p>
        </div>

        <div class="concept-box">
          <h4>Group</h4>
          <p>A collection of tiles displayed together on the Fiori Launchpad homepage.</p>
        </div>
      `,
      diagram: `
        <div class="architecture-diagram">
          <div class="diagram-title">SAP Fiori Launchpad Architecture</div>
          <div class="flow-diagram">
            <div class="flow-item">
              <div class="flow-box">T-code (SE38)</div>
              <div class="flow-arrow">↓</div>
            </div>
            <div class="flow-item">
              <div class="flow-box">Tile Configuration</div>
              <div class="flow-arrow">↓</div>
            </div>
            <div class="flow-item">
              <div class="flow-box">Catalog Assignment</div>
              <div class="flow-arrow">↓</div>
            </div>
            <div class="flow-item">
              <div class="flow-box">Group Assignment</div>
              <div class="flow-arrow">↓</div>
            </div>
            <div class="flow-item">
              <div class="flow-box highlight">Fiori Launchpad Display</div>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "Step 1: Access the Fiori Launchpad Designer",
      content: `
        <h3>Accessing the Configuration Tool</h3>
        <p>First, you need to access the Fiori Launchpad Designer, which is the tool for configuring tiles, catalogs, and groups.</p>

        <h3>Method 1: Using T-code</h3>
        <ol>
          <li>Open SAP GUI (SAP Logon)</li>
          <li>Enter transaction code: <code>/UI2/FLPD_CUST</code></li>
          <li>Press Enter</li>
        </ol>

        <h3>Method 2: Via Fiori Launchpad (if already configured)</h3>
        <ol>
          <li>Log into SAP Fiori Launchpad</li>
          <li>Search for "Launchpad Designer" tile</li>
          <li>Click to open</li>
        </ol>

        <div class="info-box">
          <strong>⚠️ Authorization Required:</strong>
          <p>You need authorization object <code>S_TCODE</code> with access to <code>/UI2/FLPD_CUST</code>. If you get an authorization error, contact your SAP Basis administrator.</p>
        </div>

        <div class="screenshot-placeholder">
          <div class="screenshot-header">Screenshot: SAP GUI Command Field</div>
          <div class="screenshot-content">
            <div class="sap-window">
              <div class="sap-menu-bar">
                <span>SAP</span>
                <span class="menu-items">System | Help</span>
              </div>
              <div class="sap-command-field">
                <label>Command:</label>
                <input type="text" value="/UI2/FLPD_CUST" readonly class="command-input" />
                <button class="execute-btn">▶</button>
              </div>
            </div>
          </div>
        </div>
      `,
      diagram: `
        <div class="navigation-path">
          <div class="path-step">SAP GUI Login</div>
          <div class="path-arrow">→</div>
          <div class="path-step highlight">Enter /UI2/FLPD_CUST</div>
          <div class="path-arrow">→</div>
          <div class="path-step">Launchpad Designer Opens</div>
        </div>
      `
    },
    {
      title: "Step 2: Create a New Catalog",
      content: `
        <h3>Understanding Catalogs</h3>
        <p>Catalogs are containers that hold tiles. Before creating a tile, you need a catalog to store it in. You can use an existing catalog or create a new one.</p>

        <h3>Creating a New Catalog</h3>
        <ol>
          <li>In the Launchpad Designer, click on the <strong>"Catalogs"</strong> tab in the left navigation panel</li>
          <li>Click the <strong>"+"</strong> button or <strong>"Create"</strong> button in the top toolbar</li>
          <li>A popup window will appear for catalog creation</li>
        </ol>

        <h3>Fill in Catalog Details</h3>
        <div class="field-explanation">
          <div class="field-item">
            <strong>ID:</strong>
            <p>A unique identifier for your catalog (e.g., <code>Z_CUSTOM_CATALOG_001</code>). Use Z* or Y* prefix for custom objects.</p>
          </div>
          <div class="field-item">
            <strong>Title:</strong>
            <p>Display name that users will see (e.g., "Custom Applications Catalog")</p>
          </div>
          <div class="field-item">
            <strong>Description:</strong>
            <p>Optional detailed description of the catalog's purpose</p>
          </div>
        </div>

        <div class="screenshot-placeholder">
          <div class="screenshot-header">Screenshot: Create Catalog Dialog</div>
          <div class="screenshot-content">
            <div class="dialog-box">
              <div class="dialog-title">Create Catalog</div>
              <div class="form-field">
                <label>ID:</label>
                <input type="text" value="Z_CUSTOM_CATALOG_001" readonly />
              </div>
              <div class="form-field">
                <label>Title:</label>
                <input type="text" value="Custom Applications Catalog" readonly />
              </div>
              <div class="form-field">
                <label>Description:</label>
                <textarea readonly>Contains custom tiles for business applications</textarea>
              </div>
              <div class="dialog-buttons">
                <button class="btn-primary">Save</button>
                <button class="btn-secondary">Cancel</button>
              </div>
            </div>
          </div>
        </div>

        <div class="tip-box">
          <strong>💡 Naming Convention Best Practice:</strong>
          <p>Use a consistent naming convention for your custom objects:
            <ul>
              <li><strong>Z_*</strong> or <strong>Y_*</strong> prefix for customer namespace</li>
              <li>Include department or function code (e.g., Z_FI_*, Z_SD_*)</li>
              <li>Add sequence numbers for multiple similar objects</li>
            </ul>
          </p>
        </div>

        <ol start="4">
          <li>Click <strong>"Save"</strong> button</li>
          <li>A transport request dialog will appear (if your system uses transport management)</li>
          <li>Select or create a transport request and click <strong>"OK"</strong></li>
        </ol>
      `,
      diagram: `
        <div class="process-flow">
          <div class="process-step">
            <div class="step-number">1</div>
            <div class="step-content">Click Catalogs Tab</div>
          </div>
          <div class="process-arrow">→</div>
          <div class="process-step">
            <div class="step-number">2</div>
            <div class="step-content">Click Create (+)</div>
          </div>
          <div class="process-arrow">→</div>
          <div class="process-step">
            <div class="step-number">3</div>
            <div class="step-content">Enter Details</div>
          </div>
          <div class="process-arrow">→</div>
          <div class="process-step highlight">
            <div class="step-number">4</div>
            <div class="step-content">Save & Transport</div>
          </div>
        </div>
      `
    },
    {
      title: "Step 3: Create a Tile in the Catalog",
      content: `
        <h3>Adding a Tile to Your Catalog</h3>
        <p>Now that you have a catalog, you'll create a tile within it that will launch your T-code.</p>

        <h3>Tile Creation Process</h3>
        <ol>
          <li>In the Launchpad Designer, ensure you're in the <strong>"Catalogs"</strong> view</li>
          <li>Find and click on your newly created catalog (<code>Z_CUSTOM_CATALOG_001</code>) in the list</li>
          <li>The catalog details will open on the right side</li>
          <li>Click the <strong>"+"</strong> button in the <strong>"Tiles"</strong> section</li>
          <li>Select <strong>"Static Tile"</strong> from the dropdown options</li>
        </ol>

        <div class="info-box">
          <strong>Tile Types:</strong>
          <ul>
            <li><strong>Static Tile:</strong> Standard tile with fixed text and icon</li>
            <li><strong>Dynamic Tile:</strong> Displays real-time data (requires OData service)</li>
            <li><strong>Custom Tile:</strong> Advanced customization with SAPUI5 components</li>
          </ul>
        </div>

        <h3>Configure Tile Properties</h3>
        <div class="field-explanation">
          <div class="field-item">
            <strong>ID:</strong>
            <p>Unique identifier for the tile (e.g., <code>Z_TILE_SE38</code>)</p>
          </div>
          <div class="field-item">
            <strong>Title:</strong>
            <p>Display text on the tile (e.g., "ABAP Editor")</p>
          </div>
          <div class="field-item">
            <strong>Subtitle:</strong>
            <p>Additional descriptive text below title (e.g., "SE38 - Program Editor")</p>
          </div>
          <div class="field-item">
            <strong>Icon:</strong>
            <p>Visual representation. Choose from SAP icon library (e.g., "sap-icon://syntax" for code-related tiles)</p>
          </div>
          <div class="field-item">
            <strong>Info:</strong>
            <p>Optional informational text displayed on tile</p>
          </div>
        </div>

        <div class="screenshot-placeholder">
          <div class="screenshot-header">Screenshot: Tile Configuration Panel</div>
          <div class="screenshot-content">
            <div class="config-panel">
              <div class="panel-header">Tile Configuration - Z_TILE_SE38</div>
              <div class="config-section">
                <h4>General Information</h4>
                <div class="form-field">
                  <label>ID:</label>
                  <input type="text" value="Z_TILE_SE38" readonly />
                </div>
                <div class="form-field">
                  <label>Title:</label>
                  <input type="text" value="ABAP Editor" readonly />
                </div>
                <div class="form-field">
                  <label>Subtitle:</label>
                  <input type="text" value="SE38 - Program Editor" readonly />
                </div>
                <div class="form-field">
                  <label>Icon:</label>
                  <input type="text" value="sap-icon://syntax" readonly />
                  <span class="icon-preview">⌨</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tip-box">
          <strong>💡 Icon Selection Tips:</strong>
          <p>To browse available icons:
            <ul>
              <li>Visit the <a href="https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" target="_blank">SAP Icon Explorer</a></li>
              <li>Search for relevant icons (e.g., "code", "document", "cart")</li>
              <li>Copy the icon name in format: <code>sap-icon://icon-name</code></li>
            </ul>
          </p>
        </div>

        <ol start="6">
          <li>Click <strong>"Save"</strong> to create the tile</li>
        </ol>
      `,
      diagram: `
        <div class="tile-visual">
          <div class="tile-example">
            <div class="tile-icon">⌨</div>
            <div class="tile-title">ABAP Editor</div>
            <div class="tile-subtitle">SE38 - Program Editor</div>
          </div>
          <div class="tile-label">How your tile will appear</div>
        </div>
      `
    },
    {
      title: "Step 4: Assign T-code to the Tile",
      content: `
        <h3>Linking the Tile to a Transaction Code</h3>
        <p>This is the crucial step where you connect your tile to a specific T-code that will launch when users click the tile.</p>

        <h3>Configure Target Mapping</h3>
        <ol>
          <li>With your tile still open in the configuration panel, scroll down to find the <strong>"Navigation"</strong> section</li>
          <li>You'll see fields for <strong>"Semantic Object"</strong> and <strong>"Action"</strong></li>
          <li>Click on <strong>"Create Target Mapping"</strong> or the <strong>"+"</strong> button in the Navigation section</li>
        </ol>

        <div class="info-box">
          <strong>What is Target Mapping?</strong>
          <p>Target Mapping defines where the tile navigates when clicked. It maps the semantic object-action pair to an actual application or T-code.</p>
        </div>

        <h3>Enter Navigation Details</h3>
        <div class="field-explanation">
          <div class="field-item">
            <strong>Semantic Object:</strong>
            <p>Logical business entity (e.g., <code>ZCustomApp</code>, <code>SalesOrder</code>). For custom tiles, use Z* prefix (e.g., <code>ZABAPEditor</code>)</p>
          </div>
          <div class="field-item">
            <strong>Action:</strong>
            <p>What to do with the object (e.g., <code>display</code>, <code>edit</code>, <code>create</code>). Common value: <code>display</code></p>
          </div>
          <div class="field-item">
            <strong>Application Type:</strong>
            <p>Select <strong>"Transaction"</strong> from the dropdown (other options include SAPUI5, URL, WDA)</p>
          </div>
          <div class="field-item">
            <strong>Transaction Code:</strong>
            <p>Enter your T-code here (e.g., <code>SE38</code>)</p>
          </div>
        </div>

        <div class="screenshot-placeholder">
          <div class="screenshot-header">Screenshot: Target Mapping Configuration</div>
          <div class="screenshot-content">
            <div class="config-panel">
              <div class="panel-header">Target Mapping Configuration</div>
              <div class="config-section">
                <h4>Navigation Intent</h4>
                <div class="form-field">
                  <label>Semantic Object:</label>
                  <input type="text" value="ZABAPEditor" readonly />
                </div>
                <div class="form-field">
                  <label>Action:</label>
                  <input type="text" value="display" readonly />
                </div>
                <div class="intent-preview">
                  Intent: <code>#ZABAPEditor-display</code>
                </div>
              </div>
              <div class="config-section">
                <h4>Target Application</h4>
                <div class="form-field">
                  <label>Application Type:</label>
                  <select disabled>
                    <option>Transaction</option>
                  </select>
                </div>
                <div class="form-field">
                  <label>Transaction Code:</label>
                  <input type="text" value="SE38" readonly />
                  <span class="field-note">The T-code to launch</span>
                </div>
                <div class="form-field">
                  <label>System Alias (Optional):</label>
                  <input type="text" placeholder="Leave empty for local system" readonly />
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3>Additional Configuration Options</h3>
        <div class="field-explanation">
          <div class="field-item">
            <strong>System Alias:</strong>
            <p>Leave empty for local system, or specify if launching T-code in another SAP system</p>
          </div>
          <div class="field-item">
            <strong>GUI Type:</strong>
            <p>Usually set to "Transaction" - defines how the GUI is rendered</p>
          </div>
          <div class="field-item">
            <strong>Parameters:</strong>
            <p>Optional parameters to pass to the T-code (advanced use case)</p>
          </div>
        </div>

        <ol start="4">
          <li>Click <strong>"Save"</strong> to save the target mapping</li>
          <li>Click <strong>"Save"</strong> again to save all tile changes</li>
          <li>Select a transport request when prompted</li>
        </ol>

        <div class="success-box">
          <strong>✅ Verification:</strong>
          <p>After saving, you should see the navigation intent (<code>#ZABAPEditor-display</code>) displayed in the tile configuration. This confirms the T-code is properly linked.</p>
        </div>
      `,
      diagram: `
        <div class="mapping-flow">
          <div class="mapping-box">
            <div class="mapping-title">User Clicks Tile</div>
          </div>
          <div class="mapping-arrow">↓</div>
          <div class="mapping-box">
            <div class="mapping-title">Intent Triggered</div>
            <div class="mapping-detail">#ZABAPEditor-display</div>
          </div>
          <div class="mapping-arrow">↓</div>
          <div class="mapping-box">
            <div class="mapping-title">Target Mapping Resolved</div>
            <div class="mapping-detail">Application Type: Transaction</div>
          </div>
          <div class="mapping-arrow">↓</div>
          <div class="mapping-box highlight">
            <div class="mapping-title">T-code Launched</div>
            <div class="mapping-detail">SE38 Opens</div>
          </div>
        </div>
      `
    },
    {
      title: "Step 5: Create or Assign to a Group",
      content: `
        <h3>Understanding Groups</h3>
        <p>Groups determine which tiles appear on the Fiori Launchpad homepage. Users see tiles based on their assigned groups. A tile in a catalog is not visible until added to a group.</p>

        <h3>Creating a New Group</h3>
        <ol>
          <li>In the Launchpad Designer, click on the <strong>"Groups"</strong> tab in the left navigation</li>
          <li>Click the <strong>"+"</strong> or <strong>"Create"</strong> button</li>
          <li>A dialog for group creation will appear</li>
        </ol>

        <h3>Fill in Group Details</h3>
        <div class="field-explanation">
          <div class="field-item">
            <strong>ID:</strong>
            <p>Unique identifier (e.g., <code>Z_CUSTOM_GROUP_DEV</code>)</p>
          </div>
          <div class="field-item">
            <strong>Title:</strong>
            <p>Display name users see (e.g., "Development Tools")</p>
          </div>
          <div class="field-item">
            <strong>Description:</strong>
            <p>Optional description of the group's purpose</p>
          </div>
        </div>

        <div class="screenshot-placeholder">
          <div class="screenshot-header">Screenshot: Create Group Dialog</div>
          <div class="screenshot-content">
            <div class="dialog-box">
              <div class="dialog-title">Create Group</div>
              <div class="form-field">
                <label>ID:</label>
                <input type="text" value="Z_CUSTOM_GROUP_DEV" readonly />
              </div>
              <div class="form-field">
                <label>Title:</label>
                <input type="text" value="Development Tools" readonly />
              </div>
              <div class="form-field">
                <label>Description:</label>
                <textarea readonly>Tools for ABAP development and testing</textarea>
              </div>
              <div class="dialog-buttons">
                <button class="btn-primary">Save</button>
                <button class="btn-secondary">Cancel</button>
              </div>
            </div>
          </div>
        </div>

        <ol start="4">
          <li>Click <strong>"Save"</strong></li>
          <li>Select a transport request</li>
        </ol>

        <h3>Adding Tiles to the Group</h3>
        <ol>
          <li>Click on your newly created group to open it</li>
          <li>In the group details panel, find the <strong>"Tiles"</strong> section</li>
          <li>Click <strong>"Add Tile"</strong> or the <strong>"+"</strong> button</li>
          <li>A catalog browser will open showing all available catalogs</li>
          <li>Navigate to your catalog (<code>Z_CUSTOM_CATALOG_001</code>)</li>
          <li>Select your tile (<code>Z_TILE_SE38</code>)</li>
          <li>Click <strong>"Add"</strong> or drag the tile to the group</li>
        </ol>

        <div class="screenshot-placeholder">
          <div class="screenshot-header">Screenshot: Add Tile to Group</div>
          <div class="screenshot-content">
            <div class="split-view">
              <div class="left-panel">
                <div class="panel-title">Available Catalogs</div>
                <div class="catalog-list">
                  <div class="catalog-item">Standard Catalog 1</div>
                  <div class="catalog-item">Standard Catalog 2</div>
                  <div class="catalog-item selected">Z_CUSTOM_CATALOG_001</div>
                </div>
              </div>
              <div class="middle-panel">
                <div class="panel-title">Tiles in Catalog</div>
                <div class="tile-grid">
                  <div class="tile-small">
                    <div class="tile-icon-small">⌨</div>
                    <div class="tile-title-small">ABAP Editor</div>
                  </div>
                </div>
              </div>
              <div class="right-panel">
                <div class="panel-title">Group: Development Tools</div>
                <div class="drop-zone">Drop tiles here or click Add</div>
              </div>
            </div>
          </div>
        </div>

        <ol start="8">
          <li>Click <strong>"Save"</strong> to save the group configuration</li>
        </ol>

        <div class="tip-box">
          <strong>💡 Group Management Tips:</strong>
          <ul>
            <li>You can add the same tile to multiple groups</li>
            <li>Arrange tiles by drag-and-drop within a group</li>
            <li>Groups can be assigned to roles for user-specific displays</li>
            <li>Consider creating groups by functional area (Finance, Sales, Development, etc.)</li>
          </ul>
        </div>
      `,
      diagram: `
        <div class="group-structure">
          <div class="structure-title">Catalog vs Group Relationship</div>
          <div class="structure-diagram">
            <div class="structure-left">
              <div class="structure-box">
                <strong>Catalog</strong>
                <div class="structure-desc">Contains all available tiles</div>
                <div class="tile-list">
                  • Tile 1<br/>
                  • Tile 2<br/>
                  • Tile 3
                </div>
              </div>
            </div>
            <div class="structure-arrows">
              <div class="arrow-line">→</div>
              <div class="arrow-line">→</div>
            </div>
            <div class="structure-right">
              <div class="structure-box highlight">
                <strong>Group</strong>
                <div class="structure-desc">Visible tiles on homepage</div>
                <div class="tile-list">
                  • Tile 1<br/>
                  • Tile 3
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "Step 6: Assign Group to User Role",
      content: `
        <h3>Making Tiles Visible to Users</h3>
        <p>The final step is assigning the group to user roles so that authorized users can see and access the tiles on their Fiori Launchpad.</p>

        <h3>Role Assignment Process</h3>
        <ol>
          <li>In the Launchpad Designer, stay in the <strong>"Groups"</strong> view</li>
          <li>Select your group (<code>Z_CUSTOM_GROUP_DEV</code>)</li>
          <li>Look for the <strong>"Role Assignment"</strong> or <strong>"Assign to Roles"</strong> button in the toolbar</li>
          <li>Click to open the role assignment dialog</li>
        </ol>

        <div class="info-box">
          <strong>Understanding Roles:</strong>
          <p>SAP roles control user authorizations and determine which groups (and therefore tiles) users see. Roles are maintained in transaction PFCG (Role Maintenance).</p>
        </div>

        <h3>Selecting Roles</h3>
        <div class="screenshot-placeholder">
          <div class="screenshot-header">Screenshot: Role Assignment Dialog</div>
          <div class="screenshot-content">
            <div class="dialog-box large">
              <div class="dialog-title">Assign Group to Roles</div>
              <div class="role-search">
                <label>Search Roles:</label>
                <input type="text" placeholder="Enter role name..." />
                <button class="btn-search">Search</button>
              </div>
              <div class="role-list">
                <div class="role-item">
                  <input type="checkbox" checked />
                  <span class="role-name">Z_DEVELOPER_ROLE</span>
                  <span class="role-desc">Developer Role</span>
                </div>
                <div class="role-item">
                  <input type="checkbox" />
                  <span class="role-name">SAP_FLP_USER</span>
                  <span class="role-desc">Fiori Launchpad User</span>
                </div>
                <div class="role-item">
                  <input type="checkbox" />
                  <span class="role-name">Z_ABAP_DEVELOPER</span>
                  <span class="role-desc">ABAP Developer</span>
                </div>
              </div>
              <div class="dialog-buttons">
                <button class="btn-primary">Assign</button>
                <button class="btn-secondary">Cancel</button>
              </div>
            </div>
          </div>
        </div>

        <ol start="5">
          <li>Search for or browse to find the relevant roles</li>
          <li>Select the checkbox next to each role that should have access to this group</li>
          <li>Click <strong>"Assign"</strong> or <strong>"OK"</strong></li>
          <li>Save the changes and select a transport request</li>
        </ol>

        <h3>Alternative Method: PFCG Transaction</h3>
        <p>You can also assign Fiori catalogs and groups directly through the PFCG transaction:</p>
        <ol>
          <li>Run transaction <code>PFCG</code></li>
          <li>Enter the role name and click <strong>"Change"</strong></li>
          <li>Go to the <strong>"Menu"</strong> tab</li>
          <li>Click <strong>"SAP Fiori Launchpad"</strong> button</li>
          <li>Add your catalog and group assignments</li>
          <li>Save and generate the role</li>
        </ol>

        <div class="screenshot-placeholder">
          <div class="screenshot-header">Screenshot: PFCG Fiori Assignment</div>
          <div class="screenshot-content">
            <div class="pfcg-window">
              <div class="pfcg-header">Role: Z_DEVELOPER_ROLE</div>
              <div class="pfcg-tabs">
                <span class="tab">Description</span>
                <span class="tab active">Menu</span>
                <span class="tab">Authorizations</span>
              </div>
              <div class="pfcg-content">
                <button class="btn-fiori">SAP Fiori Launchpad</button>
                <div class="fiori-assignments">
                  <h4>Assigned Catalogs:</h4>
                  <ul>
                    <li>Z_CUSTOM_CATALOG_001</li>
                  </ul>
                  <h4>Assigned Groups:</h4>
                  <ul>
                    <li>Z_CUSTOM_GROUP_DEV</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="warning-box">
          <strong>⚠️ Important:</strong>
          <p>After making role changes, users may need to:
            <ul>
              <li>Log out and log back in to see the new tiles</li>
              <li>Clear browser cache if tiles don't appear</li>
              <li>Wait for role buffer refresh (or run transaction SU53 to refresh)</li>
            </ul>
          </p>
        </div>
      `,
      diagram: `
        <div class="authorization-flow">
          <div class="flow-title">Authorization Flow</div>
          <div class="auth-diagram">
            <div class="auth-step">
              <div class="auth-box">User Login</div>
            </div>
            <div class="auth-arrow">↓</div>
            <div class="auth-step">
              <div class="auth-box">System Reads User Roles</div>
            </div>
            <div class="auth-arrow">↓</div>
            <div class="auth-step">
              <div class="auth-box">Roles → Groups Mapping</div>
            </div>
            <div class="auth-arrow">↓</div>
            <div class="auth-step">
              <div class="auth-box">Groups → Tiles Mapping</div>
            </div>
            <div class="auth-arrow">↓</div>
            <div class="auth-step">
              <div class="auth-box highlight">Tiles Displayed on Launchpad</div>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "Step 7: Test Your Tile",
      content: `
        <h3>Verification and Testing</h3>
        <p>Now it's time to verify that your tile appears and functions correctly in the Fiori Launchpad.</p>

        <h3>Testing Procedure</h3>
        <ol>
          <li>Log out of SAP system (or close your browser)</li>
          <li>Log back in to ensure role changes are applied</li>
          <li>Navigate to the SAP Fiori Launchpad URL (usually <code>https://&lt;server&gt;:&lt;port&gt;/sap/bc/ui2/flp</code>)</li>
          <li>Look for your group (<strong>"Development Tools"</strong>) on the homepage</li>
          <li>Verify your tile (<strong>"ABAP Editor"</strong>) appears in the group</li>
        </ol>

        <div class="screenshot-placeholder">
          <div class="screenshot-header">Screenshot: Fiori Launchpad with Custom Tile</div>
          <div class="screenshot-content">
            <div class="flp-view">
              <div class="flp-header">
                <div class="flp-logo">SAP Fiori Launchpad</div>
                <div class="flp-user">User Menu ▼</div>
              </div>
              <div class="flp-content">
                <div class="group-section">
                  <div class="group-title">Development Tools</div>
                  <div class="tile-container">
                    <div class="tile highlight">
                      <div class="tile-icon">⌨</div>
                      <div class="tile-title">ABAP Editor</div>
                      <div class="tile-subtitle">SE38 - Program Editor</div>
                    </div>
                    <div class="tile">
                      <div class="tile-icon">📊</div>
                      <div class="tile-title">Data Browser</div>
                      <div class="tile-subtitle">SE16N</div>
                    </div>
                    <div class="tile">
                      <div class="tile-icon">🔧</div>
                      <div class="tile-title">Function Builder</div>
                      <div class="tile-subtitle">SE37</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3>Test Tile Functionality</h3>
        <ol start="6">
          <li>Click on your tile (<strong>"ABAP Editor"</strong>)</li>
          <li>The T-code (SE38) should launch</li>
          <li>Verify that the correct transaction opens</li>
          <li>Confirm all functionality works as expected</li>
        </ol>

        <div class="success-box">
          <strong>✅ Success Criteria:</strong>
          <ul>
            <li>Tile appears in the correct group</li>
            <li>Tile displays correct title, subtitle, and icon</li>
            <li>Clicking tile launches the T-code without errors</li>
            <li>T-code functions normally</li>
          </ul>
        </div>

        <h3>Troubleshooting Common Issues</h3>
        <div class="troubleshooting">
          <div class="issue-item">
            <strong>Issue:</strong> Tile doesn't appear
            <br/><strong>Solution:</strong>
            <ul>
              <li>Verify group is assigned to your role in PFCG</li>
              <li>Log out and log back in</li>
              <li>Clear browser cache and cookies</li>
              <li>Check if catalog is properly assigned to the group</li>
            </ul>
          </div>

          <div class="issue-item">
            <strong>Issue:</strong> Tile appears but clicking shows authorization error
            <br/><strong>Solution:</strong>
            <ul>
              <li>Verify you have authorization for the T-code (check with transaction SU53)</li>
              <li>Contact Basis team to add T-code authorization to your role</li>
              <li>Verify T-code exists and is spelled correctly in target mapping</li>
            </ul>
          </div>

          <div class="issue-item">
            <strong>Issue:</strong> Icon not displaying
            <br/><strong>Solution:</strong>
            <ul>
              <li>Verify icon name format: <code>sap-icon://icon-name</code></li>
              <li>Check if icon name is valid in SAP Icon Explorer</li>
              <li>Try a standard icon like <code>sap-icon://document</code></li>
            </ul>
          </div>

          <div class="issue-item">
            <strong>Issue:</strong> Changes not visible after save
            <br/><strong>Solution:</strong>
            <ul>
              <li>Verify transport request was saved successfully</li>
              <li>Check if changes need to be transported to QA/Production</li>
              <li>Run cache refresh: Transaction <code>/UI2/CACHE_DELETE</code></li>
              <li>Restart ICM (Internet Communication Manager) if needed</li>
            </ul>
          </div>
        </div>

        <div class="tip-box">
          <strong>💡 Debugging Tips:</strong>
          <p>Useful transactions for troubleshooting:
            <ul>
              <li><code>SU53</code> - Display last authorization error</li>
              <li><code>/UI2/CACHE_DELETE</code> - Clear Fiori cache</li>
              <li><code>/UI2/FLPD_CONF</code> - Fiori configuration checker</li>
              <li><code>SICF</code> - HTTP service activation</li>
              <li><code>PFCG</code> - Role maintenance and verification</li>
            </ul>
          </p>
        </div>
      `,
      diagram: `
        <div class="test-flow">
          <div class="test-title">Testing Workflow</div>
          <div class="test-steps">
            <div class="test-step">
              <div class="step-icon">1</div>
              <div class="step-text">Log out & log in</div>
            </div>
            <div class="test-arrow">→</div>
            <div class="test-step">
              <div class="step-icon">2</div>
              <div class="step-text">Navigate to FLP</div>
            </div>
            <div class="test-arrow">→</div>
            <div class="test-step">
              <div class="step-icon">3</div>
              <div class="step-text">Verify tile appears</div>
            </div>
            <div class="test-arrow">→</div>
            <div class="test-step">
              <div class="step-icon">4</div>
              <div class="step-text">Click tile</div>
            </div>
            <div class="test-arrow">→</div>
            <div class="test-step highlight">
              <div class="step-icon">✓</div>
              <div class="step-text">T-code launches</div>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "Advanced Topics & Best Practices",
      content: `
        <h3>Advanced Configuration Options</h3>

        <h4>1. Dynamic Tiles with Live Data</h4>
        <p>Dynamic tiles display real-time information (e.g., number of open orders, pending approvals).</p>
        <div class="advanced-section">
          <strong>Requirements:</strong>
          <ul>
            <li>OData service providing the data</li>
            <li>Service URL and entity path</li>
            <li>Tile configuration to point to the service</li>
          </ul>
          <strong>Configuration:</strong>
          <p>In tile properties, select "Dynamic Tile" type and configure:
            <ul>
              <li><strong>Service URL:</strong> <code>/sap/opu/odata/sap/SERVICE_NAME</code></li>
              <li><strong>Number Property:</strong> Field to display as main number</li>
              <li><strong>Unit Property:</strong> Unit of measurement (optional)</li>
              <li><strong>Refresh Interval:</strong> How often to update (in seconds)</li>
            </ul>
          </p>
        </div>

        <h4>2. Passing Parameters to T-codes</h4>
        <p>You can pre-fill transaction fields by passing parameters.</p>
        <div class="code-example">
          <div class="code-title">Example: Launch VA03 with Sales Order Number</div>
          <div class="code-content">
            Target Mapping Configuration:<br/>
            • Application Type: Transaction<br/>
            • Transaction Code: VA03<br/>
            • Parameters:<br/>
            &nbsp;&nbsp;- Name: <code>VBAK-VBELN</code><br/>
            &nbsp;&nbsp;- Value: <code>{"{"}OrderNumber{"}"}</code> (from context)<br/>
          </div>
        </div>

        <h4>3. Tile Personalization</h4>
        <p>Allow users to customize their tile layout:</p>
        <ul>
          <li>Enable/disable tile personalization in FLP configuration</li>
          <li>Users can hide/show tiles via settings</li>
          <li>Drag-and-drop to rearrange tiles</li>
        </ul>

        <h3>Best Practices</h3>

        <h4>Naming Conventions</h4>
        <div class="best-practice">
          <strong>✓ DO:</strong>
          <ul>
            <li>Use Z* or Y* prefix for all custom objects</li>
            <li>Include functional area in name: Z_FI_, Z_SD_, Z_MM_</li>
            <li>Use descriptive names: Z_FI_INVOICE_DISPLAY_TILE</li>
            <li>Maintain a naming standards document</li>
          </ul>
          <strong>✗ DON'T:</strong>
          <ul>
            <li>Use SAP standard namespace (SAP*, BC_*, etc.)</li>
            <li>Create cryptic names: Z_TILE_1, MY_TILE</li>
            <li>Mix naming conventions within one project</li>
          </ul>
        </div>

        <h4>Transport Management</h4>
        <div class="best-practice">
          <ul>
            <li>Always use the same transport request for related objects (catalog, tiles, groups)</li>
            <li>Document transport request purpose clearly</li>
            <li>Test in DEV before transporting to QA/PROD</li>
            <li>Include configuration documentation in transport notes</li>
          </ul>
        </div>

        <h4>Security & Authorization</h4>
        <div class="best-practice">
          <ul>
            <li>Follow principle of least privilege - only assign necessary tiles</li>
            <li>Use role-based group assignments, not user-specific</li>
            <li>Verify T-code authorizations before creating tiles</li>
            <li>Test with actual user accounts, not admin accounts</li>
            <li>Document required authorizations for each tile</li>
          </ul>
        </div>

        <h4>Performance Considerations</h4>
        <div class="best-practice">
          <ul>
            <li>Limit number of tiles per group (max 20-30 for optimal performance)</li>
            <li>For dynamic tiles, set appropriate refresh intervals (not too frequent)</li>
            <li>Optimize OData services used by dynamic tiles</li>
            <li>Use tile intent navigation for better navigation performance</li>
          </ul>
        </div>

        <h4>Maintenance & Documentation</h4>
        <div class="best-practice">
          <ul>
            <li>Maintain a catalog of all custom tiles with descriptions</li>
            <li>Document target mappings and parameters</li>
            <li>Keep track of which roles have access to which groups</li>
            <li>Create screenshots for user training materials</li>
            <li>Establish a review process for new tile requests</li>
          </ul>
        </div>

        <h3>Common Use Cases</h3>

        <h4>Use Case 1: Report Tile</h4>
        <div class="use-case">
          <strong>Scenario:</strong> Create tile for custom ABAP report Z_SALES_REPORT<br/>
          <strong>Configuration:</strong>
          <ul>
            <li>Create catalog: Z_REPORTS_CATALOG</li>
            <li>Create tile: Z_TILE_SALES_REPORT</li>
            <li>Target mapping: Transaction → SE38 or direct report execution</li>
            <li>Parameter: RS38M-PROGRAMM = Z_SALES_REPORT</li>
          </ul>
        </div>

        <h4>Use Case 2: Web Application Tile</h4>
        <div class="use-case">
          <strong>Scenario:</strong> Link to external web application<br/>
          <strong>Configuration:</strong>
          <ul>
            <li>Application Type: URL</li>
            <li>URL: https://external-app.company.com</li>
            <li>Consider using URL templates for parameter passing</li>
          </ul>
        </div>

        <h4>Use Case 3: SAPUI5 App Tile</h4>
        <div class="use-case">
          <strong>Scenario:</strong> Launch custom Fiori app<br/>
          <strong>Configuration:</strong>
          <ul>
            <li>Application Type: SAPUI5</li>
            <li>App Component ID: com.company.myapp</li>
            <li>Define semantic object and action</li>
            <li>Configure intent-based navigation</li>
          </ul>
        </div>

        <div class="resource-box">
          <h4>Additional Resources</h4>
          <ul>
            <li><strong>SAP Icon Explorer:</strong> https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/</li>
            <li><strong>SAP Help Portal:</strong> Search for "Fiori Launchpad Configuration"</li>
            <li><strong>Transaction Codes:</strong>
              <ul>
                <li>/UI2/FLPD_CUST - Launchpad Designer</li>
                <li>/UI2/FLP - Fiori Launchpad</li>
                <li>/UI2/CACHE_DELETE - Clear cache</li>
                <li>PFCG - Role Maintenance</li>
                <li>SU53 - Authorization trace</li>
              </ul>
            </li>
          </ul>
        </div>
      `,
      diagram: `
        <div class="summary-diagram">
          <div class="summary-title">Complete Configuration Summary</div>
          <div class="summary-flow">
            <div class="summary-box">
              <div class="box-title">1. Catalog</div>
              <div class="box-content">Container for tiles</div>
            </div>
            <div class="summary-arrow">+</div>
            <div class="summary-box">
              <div class="box-title">2. Tile</div>
              <div class="box-content">Visual element</div>
            </div>
            <div class="summary-arrow">+</div>
            <div class="summary-box">
              <div class="box-title">3. Target Mapping</div>
              <div class="box-content">T-code link</div>
            </div>
            <div class="summary-arrow">+</div>
            <div class="summary-box">
              <div class="box-title">4. Group</div>
              <div class="box-content">Tile collection</div>
            </div>
            <div class="summary-arrow">+</div>
            <div class="summary-box">
              <div class="box-title">5. Role</div>
              <div class="box-content">User access</div>
            </div>
            <div class="summary-arrow">=</div>
            <div class="summary-box highlight">
              <div class="box-title">Result</div>
              <div class="box-content">Visible FLP Tile</div>
            </div>
          </div>
        </div>
      `
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps([...completedSteps, currentStep]);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleStepClick = (index) => {
    setCurrentStep(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="tutorial-container">
      <header className="tutorial-header">
        <h1>SAP HANA Fiori Tile Creation Tutorial</h1>
        <p>Learn how to create and assign tiles to T-codes step by step</p>
      </header>

      <div className="tutorial-content">
        <aside className="tutorial-sidebar">
          <h3>Tutorial Steps</h3>
          <ul className="step-list">
            {steps.map((step, index) => (
              <li
                key={index}
                className={`step-item ${currentStep === index ? 'active' : ''} ${completedSteps.includes(index) ? 'completed' : ''}`}
                onClick={() => handleStepClick(index)}
              >
                <span className="step-number">{index + 1}</span>
                <span className="step-title">{step.title}</span>
              </li>
            ))}
          </ul>
          <div className="progress-indicator">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${((completedSteps.length) / steps.length) * 100}%` }}
              ></div>
            </div>
            <p>{completedSteps.length} of {steps.length} steps completed</p>
          </div>
        </aside>

        <main className="tutorial-main">
          <div className="step-header">
            <span className="step-badge">Step {currentStep + 1} of {steps.length}</span>
            <h2>{steps[currentStep].title}</h2>
          </div>

          <div className="step-content" dangerouslySetInnerHTML={{ __html: steps[currentStep].content }}></div>

          {steps[currentStep].diagram && (
            <div className="diagram-section" dangerouslySetInnerHTML={{ __html: steps[currentStep].diagram }}></div>
          )}

          <div className="navigation-buttons">
            <button
              className="btn-nav btn-previous"
              onClick={handlePrevious}
              disabled={currentStep === 0}
            >
              ← Previous
            </button>
            <button
              className="btn-nav btn-next"
              onClick={handleNext}
              disabled={currentStep === steps.length - 1}
            >
              Next →
            </button>
          </div>

          {currentStep === steps.length - 1 && (
            <div className="completion-banner">
              <h3>🎉 Congratulations!</h3>
              <p>You've completed the SAP HANA Fiori Tile Creation Tutorial. You now know how to create custom tiles and assign them to T-codes in your SAP system.</p>
              <button className="btn-restart" onClick={() => { setCurrentStep(0); setCompletedSteps([]); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                Start Over
              </button>
            </div>
          )}
        </main>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .tutorial-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        }

        .tutorial-header {
          background: rgba(255, 255, 255, 0.95);
          padding: 2rem;
          text-align: center;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .tutorial-header h1 {
          color: #2d3748;
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .tutorial-header p {
          color: #718096;
          font-size: 1.1rem;
        }

        .tutorial-content {
          display: flex;
          max-width: 1400px;
          margin: 2rem auto;
          gap: 2rem;
          padding: 0 2rem;
        }

        .tutorial-sidebar {
          flex: 0 0 300px;
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          height: fit-content;
          position: sticky;
          top: 2rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .tutorial-sidebar h3 {
          color: #2d3748;
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }

        .step-list {
          list-style: none;
        }

        .step-item {
          display: flex;
          align-items: center;
          padding: 0.75rem;
          margin-bottom: 0.5rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
          border: 2px solid transparent;
        }

        .step-item:hover {
          background: #f7fafc;
        }

        .step-item.active {
          background: #667eea;
          color: white;
          border-color: #667eea;
        }

        .step-item.completed .step-number {
          background: #48bb78;
          color: white;
        }

        .step-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #e2e8f0;
          color: #4a5568;
          font-weight: bold;
          margin-right: 0.75rem;
          flex-shrink: 0;
          font-size: 0.9rem;
        }

        .step-item.active .step-number {
          background: white;
          color: #667eea;
        }

        .step-title {
          font-size: 0.9rem;
          line-height: 1.3;
        }

        .progress-indicator {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid #e2e8f0;
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background: #e2e8f0;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 0.5rem;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #667eea, #764ba2);
          transition: width 0.3s ease;
        }

        .progress-indicator p {
          font-size: 0.85rem;
          color: #718096;
          text-align: center;
        }

        .tutorial-main {
          flex: 1;
          background: white;
          border-radius: 12px;
          padding: 2.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .step-header {
          margin-bottom: 2rem;
        }

        .step-badge {
          display: inline-block;
          background: #edf2f7;
          color: #667eea;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .step-header h2 {
          color: #2d3748;
          font-size: 2rem;
          margin-top: 0.5rem;
        }

        .step-content {
          color: #4a5568;
          line-height: 1.8;
          font-size: 1rem;
        }

        .step-content h3 {
          color: #2d3748;
          font-size: 1.5rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #e2e8f0;
        }

        .step-content h4 {
          color: #2d3748;
          font-size: 1.2rem;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }

        .step-content p {
          margin-bottom: 1rem;
        }

        .step-content ul, .step-content ol {
          margin-left: 1.5rem;
          margin-bottom: 1rem;
        }

        .step-content li {
          margin-bottom: 0.5rem;
        }

        .step-content code {
          background: #f7fafc;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          color: #667eea;
          font-family: 'Courier New', monospace;
          font-size: 0.9em;
        }

        .concept-box, .info-box, .tip-box, .warning-box, .success-box {
          padding: 1.5rem;
          border-radius: 8px;
          margin: 1.5rem 0;
          border-left: 4px solid;
        }

        .concept-box {
          background: #f0f4ff;
          border-color: #667eea;
        }

        .info-box {
          background: #e6f7ff;
          border-color: #1890ff;
        }

        .tip-box {
          background: #f0fff4;
          border-color: #48bb78;
        }

        .warning-box {
          background: #fffaf0;
          border-color: #ed8936;
        }

        .success-box {
          background: #f0fff4;
          border-color: #38a169;
        }

        .concept-box h4, .info-box strong, .tip-box strong, .warning-box strong, .success-box strong {
          display: block;
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }

        .field-explanation {
          background: #f7fafc;
          padding: 1.5rem;
          border-radius: 8px;
          margin: 1rem 0;
        }

        .field-item {
          margin-bottom: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .field-item:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }

        .field-item strong {
          color: #2d3748;
          font-size: 1.05rem;
        }

        .field-item p {
          margin-top: 0.5rem;
          margin-bottom: 0;
          color: #4a5568;
        }

        .screenshot-placeholder {
          margin: 2rem 0;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
          background: white;
        }

        .screenshot-header {
          background: #2d3748;
          color: white;
          padding: 0.75rem 1rem;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .screenshot-content {
          padding: 2rem;
          background: #f7fafc;
          min-height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sap-window {
          width: 100%;
          background: white;
          border: 1px solid #cbd5e0;
          border-radius: 4px;
          overflow: hidden;
        }

        .sap-menu-bar {
          background: #2d3748;
          color: white;
          padding: 0.5rem 1rem;
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
        }

        .sap-command-field {
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .sap-command-field label {
          font-weight: 600;
          color: #2d3748;
        }

        .command-input {
          flex: 1;
          padding: 0.5rem;
          border: 1px solid #cbd5e0;
          border-radius: 4px;
          font-family: monospace;
          font-size: 1rem;
        }

        .execute-btn {
          background: #667eea;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
        }

        .dialog-box {
          background: white;
          border: 2px solid #cbd5e0;
          border-radius: 8px;
          min-width: 400px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .dialog-box.large {
          min-width: 600px;
        }

        .dialog-title {
          background: #667eea;
          color: white;
          padding: 1rem 1.5rem;
          font-weight: 600;
          font-size: 1.1rem;
        }

        .form-field {
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .form-field label {
          min-width: 120px;
          font-weight: 600;
          color: #2d3748;
        }

        .form-field input, .form-field textarea, .form-field select {
          flex: 1;
          padding: 0.5rem;
          border: 1px solid #cbd5e0;
          border-radius: 4px;
          font-family: inherit;
        }

        .form-field textarea {
          resize: vertical;
          min-height: 60px;
        }

        .dialog-buttons {
          padding: 1rem 1.5rem;
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
        }

        .btn-primary, .btn-secondary {
          padding: 0.5rem 1.5rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 600;
        }

        .btn-primary {
          background: #667eea;
          color: white;
        }

        .btn-secondary {
          background: #e2e8f0;
          color: #4a5568;
        }

        .config-panel {
          width: 100%;
          background: white;
          border: 1px solid #cbd5e0;
          border-radius: 8px;
        }

        .panel-header {
          background: #667eea;
          color: white;
          padding: 1rem;
          font-weight: 600;
        }

        .config-section {
          padding: 1.5rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .config-section:last-child {
          border-bottom: none;
        }

        .config-section h4 {
          margin: 0 0 1rem 0;
          color: #2d3748;
        }

        .icon-preview {
          font-size: 1.5rem;
          margin-left: 0.5rem;
        }

        .intent-preview {
          margin-top: 1rem;
          padding: 0.75rem;
          background: #f7fafc;
          border-radius: 4px;
          font-family: monospace;
        }

        .field-note {
          color: #718096;
          font-size: 0.85rem;
          font-style: italic;
          margin-left: 0.5rem;
        }

        .diagram-section {
          margin: 2rem 0;
          padding: 2rem;
          background: #f7fafc;
          border-radius: 8px;
          border: 2px solid #e2e8f0;
        }

        .architecture-diagram, .navigation-path, .process-flow, .mapping-flow, .group-structure, .authorization-flow, .test-flow, .summary-diagram {
          text-align: center;
        }

        .diagram-title, .flow-title, .structure-title, .test-title, .summary-title {
          font-weight: 600;
          font-size: 1.2rem;
          color: #2d3748;
          margin-bottom: 1.5rem;
        }

        .flow-diagram {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .flow-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .flow-box {
          background: white;
          padding: 1rem 2rem;
          border: 2px solid #cbd5e0;
          border-radius: 8px;
          font-weight: 500;
          min-width: 200px;
        }

        .flow-box.highlight {
          background: #667eea;
          color: white;
          border-color: #667eea;
        }

        .flow-arrow {
          font-size: 1.5rem;
          color: #667eea;
          margin: 0.25rem 0;
        }

        .navigation-path {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .path-step {
          background: white;
          padding: 0.75rem 1.5rem;
          border: 2px solid #cbd5e0;
          border-radius: 8px;
          font-weight: 500;
        }

        .path-step.highlight {
          background: #667eea;
          color: white;
          border-color: #667eea;
        }

        .path-arrow {
          font-size: 1.5rem;
          color: #667eea;
        }

        .process-flow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .process-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .process-step.highlight .step-number {
          background: #48bb78;
        }

        .step-number {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #667eea;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.2rem;
        }

        .step-content {
          background: white;
          padding: 0.75rem 1rem;
          border: 2px solid #cbd5e0;
          border-radius: 8px;
          font-weight: 500;
          min-width: 120px;
        }

        .process-arrow {
          font-size: 2rem;
          color: #667eea;
        }

        .tile-visual {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .tile-example {
          background: white;
          width: 200px;
          height: 200px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .tile-example:hover {
          transform: translateY(-4px);
        }

        .tile-icon {
          font-size: 3rem;
        }

        .tile-title {
          font-weight: 600;
          font-size: 1.1rem;
          color: #2d3748;
          text-align: center;
        }

        .tile-subtitle {
          font-size: 0.85rem;
          color: #718096;
          text-align: center;
        }

        .tile-label {
          color: #718096;
          font-style: italic;
        }

        .mapping-flow, .authorization-flow, .test-flow {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .mapping-box, .auth-box, .test-box {
          background: white;
          padding: 1rem 2rem;
          border: 2px solid #cbd5e0;
          border-radius: 8px;
          min-width: 250px;
        }

        .mapping-box.highlight, .auth-box.highlight, .test-box.highlight {
          background: #667eea;
          color: white;
          border-color: #667eea;
        }

        .mapping-title, .auth-title {
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .mapping-detail, .auth-detail {
          font-size: 0.85rem;
          color: #718096;
        }

        .mapping-box.highlight .mapping-detail, .auth-box.highlight .auth-detail {
          color: rgba(255, 255, 255, 0.9);
        }

        .mapping-arrow, .auth-arrow {
          font-size: 1.5rem;
          color: #667eea;
        }

        .split-view {
          display: flex;
          gap: 1rem;
          background: white;
          border: 1px solid #cbd5e0;
          border-radius: 8px;
          overflow: hidden;
        }

        .left-panel, .middle-panel, .right-panel {
          flex: 1;
          padding: 1rem;
        }

        .left-panel, .middle-panel {
          border-right: 1px solid #e2e8f0;
        }

        .panel-title {
          font-weight: 600;
          margin-bottom: 1rem;
          color: #2d3748;
          font-size: 0.9rem;
        }

        .catalog-list, .tile-grid {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .catalog-item {
          padding: 0.75rem;
          background: #f7fafc;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.85rem;
        }

        .catalog-item.selected {
          background: #667eea;
          color: white;
        }

        .tile-small {
          background: #f7fafc;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          padding: 0.75rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .tile-icon-small {
          font-size: 1.5rem;
        }

        .tile-title-small {
          font-size: 0.85rem;
          font-weight: 500;
        }

        .drop-zone {
          border: 2px dashed #cbd5e0;
          border-radius: 8px;
          padding: 2rem;
          text-align: center;
          color: #718096;
          min-height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .group-structure {
          text-align: center;
        }

        .structure-diagram {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          margin-top: 1.5rem;
        }

        .structure-box {
          background: white;
          padding: 1.5rem;
          border: 2px solid #cbd5e0;
          border-radius: 8px;
          min-width: 200px;
        }

        .structure-box.highlight {
          background: #667eea;
          color: white;
          border-color: #667eea;
        }

        .structure-box strong {
          display: block;
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }

        .structure-desc {
          font-size: 0.85rem;
          color: #718096;
          margin-bottom: 1rem;
        }

        .structure-box.highlight .structure-desc {
          color: rgba(255, 255, 255, 0.9);
        }

        .tile-list {
          text-align: left;
          font-size: 0.85rem;
          line-height: 1.8;
        }

        .structure-arrows {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .arrow-line {
          font-size: 2rem;
          color: #667eea;
        }

        .role-search {
          padding: 1rem 1.5rem;
          display: flex;
          gap: 1rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .role-search input {
          flex: 1;
          padding: 0.5rem;
          border: 1px solid #cbd5e0;
          border-radius: 4px;
        }

        .btn-search {
          background: #667eea;
          color: white;
          border: none;
          padding: 0.5rem 1.5rem;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 600;
        }

        .role-list {
          padding: 1rem 1.5rem;
          max-height: 300px;
          overflow-y: auto;
        }

        .role-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .role-item:last-child {
          border-bottom: none;
        }

        .role-name {
          font-weight: 600;
          color: #2d3748;
          font-family: monospace;
        }

        .role-desc {
          color: #718096;
          font-size: 0.9rem;
        }

        .pfcg-window {
          background: white;
          border: 1px solid #cbd5e0;
          border-radius: 8px;
          overflow: hidden;
          min-width: 500px;
        }

        .pfcg-header {
          background: #2d3748;
          color: white;
          padding: 0.75rem 1rem;
          font-weight: 600;
        }

        .pfcg-tabs {
          display: flex;
          background: #e2e8f0;
          border-bottom: 1px solid #cbd5e0;
        }

        .tab {
          padding: 0.75rem 1.5rem;
          cursor: pointer;
          border-right: 1px solid #cbd5e0;
        }

        .tab.active {
          background: white;
          font-weight: 600;
        }

        .pfcg-content {
          padding: 1.5rem;
        }

        .btn-fiori {
          background: #667eea;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .fiori-assignments {
          background: #f7fafc;
          padding: 1rem;
          border-radius: 4px;
          margin-top: 1rem;
        }

        .fiori-assignments h4 {
          margin: 1rem 0 0.5rem 0;
          color: #2d3748;
        }

        .fiori-assignments ul {
          margin-left: 1.5rem;
        }

        .auth-diagram, .test-steps {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .auth-step, .test-step {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .test-steps {
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .test-arrow {
          font-size: 2rem;
          color: #667eea;
        }

        .step-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #667eea;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
        }

        .test-step.highlight .step-icon {
          background: #48bb78;
        }

        .step-text {
          background: white;
          padding: 0.75rem 1rem;
          border: 2px solid #cbd5e0;
          border-radius: 8px;
          font-weight: 500;
          min-width: 120px;
          text-align: center;
        }

        .flp-view {
          background: white;
          border: 1px solid #cbd5e0;
          border-radius: 8px;
          overflow: hidden;
          min-width: 600px;
        }

        .flp-header {
          background: #2d3748;
          color: white;
          padding: 1rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .flp-logo {
          font-weight: 600;
          font-size: 1.1rem;
        }

        .flp-user {
          cursor: pointer;
        }

        .flp-content {
          padding: 2rem;
          background: #f7fafc;
          min-height: 300px;
        }

        .group-section {
          margin-bottom: 2rem;
        }

        .group-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 1rem;
        }

        .tile-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 1rem;
        }

        .tile {
          background: white;
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          min-height: 180px;
          justify-content: center;
        }

        .tile:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }

        .tile.highlight {
          border: 2px solid #667eea;
        }

        .troubleshooting {
          margin: 2rem 0;
        }

        .issue-item {
          background: #f7fafc;
          padding: 1.5rem;
          border-radius: 8px;
          margin-bottom: 1rem;
          border-left: 4px solid #ed8936;
        }

        .advanced-section {
          background: #f7fafc;
          padding: 1.5rem;
          border-radius: 8px;
          margin: 1rem 0;
        }

        .code-example {
          background: #2d3748;
          color: white;
          border-radius: 8px;
          overflow: hidden;
          margin: 1rem 0;
        }

        .code-title {
          background: #1a202c;
          padding: 0.75rem 1rem;
          font-weight: 600;
        }

        .code-content {
          padding: 1rem;
          font-family: monospace;
          line-height: 1.6;
        }

        .best-practice {
          background: #f7fafc;
          padding: 1.5rem;
          border-radius: 8px;
          margin: 1rem 0;
        }

        .use-case {
          background: #f0f4ff;
          padding: 1.5rem;
          border-radius: 8px;
          margin: 1rem 0;
          border-left: 4px solid #667eea;
        }

        .resource-box {
          background: #f0fff4;
          padding: 1.5rem;
          border-radius: 8px;
          margin: 2rem 0;
          border-left: 4px solid #48bb78;
        }

        .resource-box h4 {
          color: #2d3748;
          margin-bottom: 1rem;
        }

        .summary-flow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-top: 1.5rem;
        }

        .summary-box {
          background: white;
          padding: 1rem 1.5rem;
          border: 2px solid #cbd5e0;
          border-radius: 8px;
          min-width: 100px;
          text-align: center;
        }

        .summary-box.highlight {
          background: #667eea;
          color: white;
          border-color: #667eea;
        }

        .box-title {
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .box-content {
          font-size: 0.85rem;
          color: #718096;
        }

        .summary-box.highlight .box-content {
          color: rgba(255, 255, 255, 0.9);
        }

        .summary-arrow {
          font-size: 1.5rem;
          color: #667eea;
          font-weight: bold;
        }

        .navigation-buttons {
          display: flex;
          justify-content: space-between;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 2px solid #e2e8f0;
        }

        .btn-nav {
          padding: 0.75rem 2rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-previous {
          background: #e2e8f0;
          color: #4a5568;
        }

        .btn-previous:hover:not(:disabled) {
          background: #cbd5e0;
        }

        .btn-next {
          background: #667eea;
          color: white;
        }

        .btn-next:hover:not(:disabled) {
          background: #5568d3;
        }

        .btn-nav:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .completion-banner {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
          margin-top: 2rem;
        }

        .completion-banner h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .completion-banner p {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .btn-restart {
          background: white;
          color: #667eea;
          padding: 0.75rem 2rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-restart:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 1024px) {
          .tutorial-content {
            flex-direction: column;
          }

          .tutorial-sidebar {
            position: static;
            flex: 1;
          }

          .tile-container {
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          }

          .test-steps {
            flex-direction: column;
          }

          .summary-flow {
            flex-direction: column;
          }

          .structure-diagram {
            flex-direction: column;
          }

          .split-view {
            flex-direction: column;
          }

          .left-panel, .middle-panel {
            border-right: none;
            border-bottom: 1px solid #e2e8f0;
          }
        }

        @media (max-width: 768px) {
          .tutorial-header h1 {
            font-size: 1.8rem;
          }

          .tutorial-header p {
            font-size: 1rem;
          }

          .tutorial-content {
            padding: 0 1rem;
            margin: 1rem auto;
          }

          .tutorial-main {
            padding: 1.5rem;
          }

          .step-header h2 {
            font-size: 1.5rem;
          }

          .navigation-buttons {
            flex-direction: column;
            gap: 1rem;
          }

          .dialog-box {
            min-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
