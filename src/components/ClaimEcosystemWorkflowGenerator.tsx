import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Paper,
  CircularProgress,
  Alert,
  TextField,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

interface EcosystemComponent {
  id: string;
  name: string;
  color: string;
  description: string;
}

const ecosystemComponents: EcosystemComponent[] = [
  { id: 'member-portal', name: 'Member Portal', color: '#1976D2', description: 'Customer-facing interface for claim submission and tracking' },
  { id: 'regulatory-compliance', name: 'Regulatory Compliance', color: '#388E3C', description: 'Ensures adherence to healthcare regulations and standards' },
  { id: 'provider-network', name: 'Provider Network', color: '#F57C00', description: 'Management of healthcare provider relationships and contracts' },
  { id: 'auto-adjudication', name: 'Auto Adjudication', color: '#7B1FA2', description: 'Automated claim processing and decision making' },
  { id: 'reporting-analytics', name: 'Reporting & Analytics', color: '#C2185B', description: 'Data analysis and business intelligence for claims insights' },
  { id: 'data-warehouse', name: 'Data Warehouse', color: '#00796B', description: 'Centralized storage and management of claim data' },
  { id: 'payment-processing', name: 'Payment Processing', color: '#5D4037', description: 'Financial transaction processing and reimbursements' },
  { id: 'claims-intake', name: 'Claims Intake', color: '#9C27B0', description: 'Initial claim submission and validation' }
];

const ClaimEcosystemWorkflowGenerator: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedComponents, setSelectedComponents] = useState<string[]>(ecosystemComponents.map(c => c.id));
  const [workflowTitle, setWorkflowTitle] = useState('Dynamic Claim Ecosystem Workflow');
  const [workflowDescription, setWorkflowDescription] = useState('Comprehensive overview of the insurance claim processing ecosystem');
  const [workflowType, setWorkflowType] = useState<'ecosystem' | 'processing'>('ecosystem');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const getComponentWorkflowSteps = (componentId: string): string[] => {
    const workflows: { [key: string]: string[] } = {
      'member-portal': [
        'User authentication and login',
        'Claim form submission interface',
        'Document upload and attachment',
        'Real-time validation and error checking',
        'Confirmation and tracking number generation'
      ],
      'regulatory-compliance': [
        'HIPAA compliance verification',
        'State and federal regulation checks',
        'Audit trail creation and maintenance',
        'Compliance reporting and documentation',
        'Risk assessment and mitigation'
      ],
      'provider-network': [
        'Provider eligibility verification',
        'Contract terms and rates lookup',
        'Network status confirmation',
        'Prior authorization checks',
        'Provider communication and updates'
      ],
      'auto-adjudication': [
        'Claim data extraction and parsing',
        'Business rules engine processing',
        'Medical necessity evaluation',
        'Pricing and benefit calculation',
        'Automated decision rendering'
      ],
      'reporting-analytics': [
        'Data aggregation and cleansing',
        'Statistical analysis and modeling',
        'Trend identification and forecasting',
        'Dashboard and report generation',
        'Stakeholder notification and distribution'
      ],
      'data-warehouse': [
        'Data ingestion from multiple sources',
        'ETL processing and transformation',
        'Data quality validation and cleansing',
        'Historical data archiving',
        'Performance optimization and indexing'
      ],
      'payment-processing': [
        'Payment calculation and validation',
        'Banking and ACH processing setup',
        'Electronic funds transfer execution',
        'Payment confirmation and reconciliation',
        'Exception handling and retry logic'
      ],
      'claims-intake': [
        'Initial claim receipt and logging',
        'Data format validation and standardization',
        'Duplicate claim detection',
        'Priority assignment and routing',
        'Acknowledgment and tracking setup'
      ]
    };
    
    return workflows[componentId] || ['Processing step 1', 'Processing step 2', 'Processing step 3'];
  };

  const generateEcosystemPPTX = async (pptx: any) => {
    const titleSlide = pptx.addSlide();
    titleSlide.addText(workflowTitle, {
      x: 1,
      y: 2,
      w: 8,
      h: 1.5,
      fontSize: 36,
      bold: true,
      color: '1f4e79',
      align: 'center'
    });

    titleSlide.addText(workflowDescription, {
      x: 1,
      y: 3.5,
      w: 8,
      h: 1,
      fontSize: 18,
      color: '666666',
      align: 'center'
    });

    titleSlide.addText(`Generated on: ${new Date().toLocaleDateString()}`, {
      x: 1,
      y: 5,
      w: 8,
      h: 0.5,
      fontSize: 12,
      color: '999999',
      align: 'center'
    });

    const ecosystemSlide = pptx.addSlide();
    ecosystemSlide.addText('Claim Ecosystem Overview', {
      x: 0.5,
      y: 0.5,
      w: 9,
      h: 0.8,
      fontSize: 28,
      bold: true,
      color: '1f4e79',
      align: 'center'
    });

    ecosystemSlide.addShape('ellipse', {
      x: 4,
      y: 3,
      w: 2,
      h: 1.5,
      fill: { color: '00695C' },
      line: { color: 'FFFFFF', width: 2 }
    });

    ecosystemSlide.addText('Claim\nEcosystem', {
      x: 4,
      y: 3.2,
      w: 2,
      h: 1.1,
      fontSize: 16,
      bold: true,
      color: 'FFFFFF',
      align: 'center',
      valign: 'middle'
    });

    const centerX = 5;
    const centerY = 3.75;
    const radius = 2.5;
    const selectedComponentsData = ecosystemComponents.filter(comp => 
      selectedComponents.includes(comp.id)
    );

    selectedComponentsData.forEach((component, index) => {
      const angle = (index / selectedComponentsData.length) * 2 * Math.PI - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle) - 1;
      const y = centerY + radius * Math.sin(angle) - 0.4;

      ecosystemSlide.addShape('rect', {
        x: x,
        y: y,
        w: 2,
        h: 0.8,
        fill: { color: component.color },
        line: { color: 'FFFFFF', width: 1 }
      });

      ecosystemSlide.addText(component.name, {
        x: x,
        y: y + 0.1,
        w: 2,
        h: 0.6,
        fontSize: 10,
        bold: true,
        color: 'FFFFFF',
        align: 'center',
        valign: 'middle'
      });

      ecosystemSlide.addShape('line', {
        x: centerX,
        y: centerY,
        w: (x + 1) - centerX,
        h: (y + 0.4) - centerY,
        line: { color: '666666', width: 1 }
      });
    });

    selectedComponentsData.forEach((component, index) => {
      const detailSlide = pptx.addSlide();
      detailSlide.addText(`${component.name} Workflow`, {
        x: 0.5,
        y: 0.5,
        w: 9,
        h: 0.8,
        fontSize: 28,
        bold: true,
        color: '1f4e79',
        align: 'center'
      });

      detailSlide.addText(component.description, {
        x: 1,
        y: 1.5,
        w: 8,
        h: 0.5,
        fontSize: 16,
        color: '666666',
        align: 'center'
      });

      const workflowSteps = getComponentWorkflowSteps(component.id);
      workflowSteps.forEach((step, stepIndex) => {
        detailSlide.addShape('rect', {
          x: 1,
          y: 2.5 + (stepIndex * 0.8),
          w: 8,
          h: 0.6,
          fill: { color: component.color },
          line: { color: 'FFFFFF', width: 1 }
        });

        detailSlide.addText(`${stepIndex + 1}. ${step}`, {
          x: 1.2,
          y: 2.6 + (stepIndex * 0.8),
          w: 7.6,
          h: 0.4,
          fontSize: 12,
          color: 'FFFFFF'
        });

        if (stepIndex < workflowSteps.length - 1) {
          detailSlide.addShape('line', {
            x: 5,
            y: 3.1 + (stepIndex * 0.8),
            w: 0,
            h: 0.4,
            line: { color: component.color, width: 3 }
          });
          
          detailSlide.addShape('line', {
            x: 4.9,
            y: 3.4 + (stepIndex * 0.8),
            w: 0.1,
            h: 0.1,
            line: { color: component.color, width: 3 }
          });
          detailSlide.addShape('line', {
            x: 5.1,
            y: 3.4 + (stepIndex * 0.8),
            w: -0.1,
            h: 0.1,
            line: { color: component.color, width: 3 }
          });
        }
      });

      detailSlide.addText(`Component: ${component.name}`, {
        x: 1,
        y: 6.5,
        w: 8,
        h: 0.3,
        fontSize: 10,
        color: '333333'
      });
    });

    const summarySlide = pptx.addSlide();
    summarySlide.addText('Workflow Summary', {
      x: 0.5,
      y: 0.5,
      w: 9,
      h: 0.8,
      fontSize: 28,
      bold: true,
      color: '1f4e79',
      align: 'center'
    });

    summarySlide.addText(`This workflow includes ${selectedComponentsData.length} key components of the claim ecosystem:`, {
      x: 1,
      y: 1.5,
      w: 8,
      h: 0.5,
      fontSize: 16,
      color: '666666'
    });

    selectedComponentsData.forEach((component, index) => {
      summarySlide.addText(`• ${component.name}: ${component.description}`, {
        x: 1,
        y: 2.2 + (index * 0.4),
        w: 8,
        h: 0.3,
        fontSize: 12,
        color: '333333'
      });
    });
  };

  const generateClaimProcessingPPTX = async (pptx: any) => {
    const titleSlide = pptx.addSlide();
    titleSlide.addText('Claim Processing Workflow', {
      x: 0.5,
      y: 2,
      w: 9,
      h: 1.5,
      fontSize: 36,
      bold: true,
      color: '1f4e79',
      align: 'center'
    });

    titleSlide.addText('Dynamic Data Flow Across Processing Stages', {
      x: 0.5,
      y: 3.5,
      w: 9,
      h: 0.8,
      fontSize: 18,
      color: '666666',
      align: 'center'
    });

    const workflowSlide = pptx.addSlide();
    
    workflowSlide.addText('Claim Processing', {
      x: 0.5,
      y: 0.3,
      w: 9,
      h: 0.6,
      fontSize: 24,
      bold: true,
      color: '1f4e79',
      align: 'center'
    });

    const stages = [
      { name: 'Intake Claim', x: 1, color: '2E7D7B' },
      { name: 'Process Claim', x: 4, color: '2E7D7B' },
      { name: 'Pay Claim', x: 7, color: '2E7D7B' }
    ];

    stages.forEach((stage, index) => {
      workflowSlide.addShape('rect', {
        x: stage.x,
        y: 1.2,
        w: 2.5,
        h: 0.6,
        fill: { color: stage.color },
        line: { color: 'FFFFFF', width: 1 }
      });

      workflowSlide.addText(stage.name, {
        x: stage.x,
        y: 1.35,
        w: 2.5,
        h: 0.3,
        fontSize: 14,
        bold: true,
        color: 'FFFFFF',
        align: 'center'
      });

      if (index < stages.length - 1) {
        workflowSlide.addShape('line', {
          x: stage.x + 2.5,
          y: 1.5,
          w: 1,
          h: 0,
          line: { color: '2E7D7B', width: 3 }
        });
        
        workflowSlide.addShape('line', {
          x: stage.x + 3.3,
          y: 1.4,
          w: 0.2,
          h: 0.1,
          line: { color: '2E7D7B', width: 3 }
        });
        workflowSlide.addShape('line', {
          x: stage.x + 3.3,
          y: 1.6,
          w: 0.2,
          h: -0.1,
          line: { color: '2E7D7B', width: 3 }
        });
      }
    });

    workflowSlide.addText('Customer/Provider\nSubmits Claim', {
      x: 0.5,
      y: 2.2,
      w: 2,
      h: 0.8,
      fontSize: 10,
      align: 'center',
      color: '333333'
    });

    workflowSlide.addText('179M Claims\nPer Year', {
      x: 0.5,
      y: 3.2,
      w: 2,
      h: 0.6,
      fontSize: 12,
      bold: true,
      align: 'center',
      color: 'D2691E'
    });

    workflowSlide.addText('Paper 5%\nEDI 95%', {
      x: 2.5,
      y: 3.2,
      w: 1.5,
      h: 0.6,
      fontSize: 10,
      align: 'center',
      color: 'D2691E'
    });

    workflowSlide.addText('Auto-Adjudicate Claim', {
      x: 3.5,
      y: 2.2,
      w: 2.5,
      h: 0.4,
      fontSize: 10,
      align: 'center',
      color: '333333'
    });

    workflowSlide.addText('Auto 85.5% | Manual 14.5%', {
      x: 3.5,
      y: 2.7,
      w: 2.5,
      h: 0.4,
      fontSize: 10,
      bold: true,
      align: 'center',
      color: 'D2691E'
    });

    workflowSlide.addText('Secondary Inspection\nRequired?', {
      x: 3.5,
      y: 3.3,
      w: 2.5,
      h: 0.6,
      fontSize: 10,
      align: 'center',
      color: '333333'
    });

    workflowSlide.addText('High $$$ Team review/pend\nPrepay & SmartAlec\nMacro pends claims\nExternal pricing Vendor\napplies pricing', {
      x: 3.2,
      y: 4.2,
      w: 3,
      h: 1.2,
      fontSize: 9,
      align: 'left',
      color: '666666'
    });

    workflowSlide.addText('Pay, Pend or Deny', {
      x: 6.5,
      y: 2.2,
      w: 2.5,
      h: 0.4,
      fontSize: 10,
      align: 'center',
      color: '333333'
    });

    workflowSlide.addText('Pay', {
      x: 6.5,
      y: 2.8,
      w: 0.8,
      h: 0.3,
      fontSize: 10,
      bold: true,
      align: 'center',
      color: '2E7D7B'
    });

    workflowSlide.addText('Finalize Claim → Pay Claim → Provide EOB/EOP → END', {
      x: 6.5,
      y: 3.2,
      w: 2.5,
      h: 0.4,
      fontSize: 8,
      align: 'center',
      color: '333333'
    });

    workflowSlide.addText('Pend', {
      x: 6.5,
      y: 3.8,
      w: 0.8,
      h: 0.3,
      fontSize: 10,
      bold: true,
      align: 'center',
      color: 'FF8C00'
    });

    workflowSlide.addText('Request Info from Prov/Cust', {
      x: 6.5,
      y: 4.2,
      w: 2.5,
      h: 0.4,
      fontSize: 8,
      align: 'center',
      color: '333333'
    });

    workflowSlide.addText('Deny', {
      x: 6.5,
      y: 4.8,
      w: 0.8,
      h: 0.3,
      fontSize: 10,
      bold: true,
      align: 'center',
      color: 'DC143C'
    });

    workflowSlide.addText('Finalize Claim (Denied) → Provide EOB/EOP → END', {
      x: 6.5,
      y: 5.2,
      w: 2.5,
      h: 0.4,
      fontSize: 8,
      align: 'center',
      color: '333333'
    });

    const metricsSlide = pptx.addSlide();
    metricsSlide.addText('Key Processing Metrics', {
      x: 0.5,
      y: 0.5,
      w: 9,
      h: 0.8,
      fontSize: 28,
      bold: true,
      color: '1f4e79',
      align: 'center'
    });

    const metrics = [
      { label: 'Annual Claim Volume', value: '179M Claims', color: 'D2691E' },
      { label: 'Electronic Data Interchange', value: '95% EDI', color: '2E7D7B' },
      { label: 'Paper Claims', value: '5% Paper', color: '666666' },
      { label: 'Auto-Adjudication Rate', value: '85.5% Auto', color: '2E7D7B' },
      { label: 'Manual Processing', value: '14.5% Manual', color: 'FF8C00' }
    ];

    metrics.forEach((metric, index) => {
      const y = 2 + (index * 0.8);
      
      metricsSlide.addShape('rect', {
        x: 1,
        y: y,
        w: 8,
        h: 0.6,
        fill: { color: metric.color },
        line: { color: 'FFFFFF', width: 1 }
      });

      metricsSlide.addText(metric.label, {
        x: 1.2,
        y: y + 0.1,
        w: 4,
        h: 0.4,
        fontSize: 14,
        bold: true,
        color: 'FFFFFF'
      });

      metricsSlide.addText(metric.value, {
        x: 5.5,
        y: y + 0.1,
        w: 3,
        h: 0.4,
        fontSize: 16,
        bold: true,
        color: 'FFFFFF',
        align: 'right'
      });
    });

    metricsSlide.addText('Data and Metrics as of March 2022', {
      x: 0.5,
      y: 6.5,
      w: 9,
      h: 0.4,
      fontSize: 10,
      color: '666666',
      align: 'right'
    });
  };

  const generatePPTX = async () => {
    if (workflowType === 'ecosystem' && selectedComponents.length === 0) {
      setError('Please select at least one component to generate the workflow.');
      return;
    }

    setIsGenerating(true);
    setError(null);
    setSuccess(null);

    try {
      const PptxGenJS = (await import('pptxgenjs')).default;
      const pptx = new PptxGenJS();

      if (workflowType === 'processing') {
        await generateClaimProcessingPPTX(pptx);
      } else {
        await generateEcosystemPPTX(pptx);
      }

      const fileName = `${workflowTitle.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pptx`;
      await pptx.writeFile({ fileName });
      
      setSuccess(`PPTX file "${fileName}" has been generated and downloaded successfully!`);
    } catch (err) {
      console.error('Error generating PPTX:', err);
      setError('Failed to generate PPTX file. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleComponentToggle = (componentId: string) => {
    setSelectedComponents((prev: string[]) => 
      prev.includes(componentId) 
        ? prev.filter((id: string) => id !== componentId)
        : [...prev, componentId]
    );
  };

  const handleWorkflowTypeChange = (event: SelectChangeEvent) => {
    const newType = event.target.value as 'ecosystem' | 'processing';
    setWorkflowType(newType);
    
    if (newType === 'processing') {
      setWorkflowTitle('Dynamic Claim Processing Workflow');
      setWorkflowDescription('Data flow across Intake, Process, and Pay claim stages');
    } else {
      setWorkflowTitle('Dynamic Claim Ecosystem Workflow');
      setWorkflowDescription('Comprehensive overview of the insurance claim processing ecosystem');
    }
  };

  return (
    <Box sx={{ py: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
        <AccountTreeIcon sx={{ fontSize: 40, color: 'primary.main' }} />
        Claim Ecosystem Workflow Generator
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Workflow Configuration
            </Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Workflow Type</InputLabel>
                  <Select
                    value={workflowType}
                    label="Workflow Type"
                    onChange={handleWorkflowTypeChange}
                  >
                    <MenuItem value="ecosystem">Claim Ecosystem Components</MenuItem>
                    <MenuItem value="processing">Claim Processing Stages</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Workflow Title"
                  value={workflowTitle}
                  onChange={(e) => setWorkflowTitle(e.target.value)}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Workflow Description"
                  value={workflowDescription}
                  onChange={(e) => setWorkflowDescription(e.target.value)}
                  margin="normal"
                  multiline
                  rows={2}
                />
              </Grid>
            </Grid>
          </Paper>

          <Paper sx={{ p: 3 }}>
            {workflowType === 'ecosystem' ? (
              <>
                <Typography variant="h6" gutterBottom>
                  Select Ecosystem Components
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                  Choose which components to include in your workflow presentation
                </Typography>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                  {ecosystemComponents.map((component) => (
                    <Chip
                      key={component.id}
                      label={component.name}
                      onClick={() => handleComponentToggle(component.id)}
                      color={selectedComponents.includes(component.id) ? 'primary' : 'default'}
                      variant={selectedComponents.includes(component.id) ? 'filled' : 'outlined'}
                      sx={{ 
                        backgroundColor: selectedComponents.includes(component.id) ? component.color : 'transparent',
                        color: selectedComponents.includes(component.id) ? 'white' : 'inherit',
                        '&:hover': {
                          backgroundColor: selectedComponents.includes(component.id) ? component.color : 'rgba(0,0,0,0.04)'
                        }
                      }}
                    />
                  ))}
                </Box>
              </>
            ) : (
              <>
                <Typography variant="h6" gutterBottom>
                  Claim Processing Workflow
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                  Generate dynamic PPTX showing data flow across Intake, Process, and Pay claim stages
                </Typography>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                  {['Intake Claim', 'Process Claim', 'Pay Claim'].map((stage) => (
                    <Chip
                      key={stage}
                      label={stage}
                      color="primary"
                      variant="filled"
                      sx={{ 
                        backgroundColor: '#2E7D7B',
                        color: 'white'
                      }}
                    />
                  ))}
                </Box>
                
                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                  <strong>Key Metrics:</strong> 179M Claims/Year • 95% EDI • 85.5% Auto-Adjudication • Processing Decision Points
                </Typography>
              </>
            )}

            <Button
              variant="contained"
              size="large"
              onClick={generatePPTX}
              disabled={isGenerating || (workflowType === 'ecosystem' && selectedComponents.length === 0)}
              startIcon={isGenerating ? <CircularProgress size={20} /> : <DownloadIcon />}
              sx={{ mt: 2 }}
            >
              {isGenerating ? 'Generating...' : 'Generate & Download PPTX'}
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Preview
              </Typography>
              {workflowType === 'ecosystem' ? (
                <>
                  <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                    Selected Components: {selectedComponents.length}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {ecosystemComponents
                      .filter(comp => selectedComponents.includes(comp.id))
                      .map((component) => (
                        <Box key={component.id} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Box
                            sx={{
                              width: 12,
                              height: 12,
                              backgroundColor: component.color,
                              borderRadius: '50%'
                            }}
                          />
                          <Typography variant="body2">{component.name}</Typography>
                        </Box>
                      ))}
                  </Box>
                </>
              ) : (
                <>
                  <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                    Processing Stages: 3
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {['Intake Claim', 'Process Claim', 'Pay Claim'].map((stage) => (
                      <Box key={stage} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box
                          sx={{
                            width: 12,
                            height: 12,
                            backgroundColor: '#2E7D7B',
                            borderRadius: '50%'
                          }}
                        />
                        <Typography variant="body2">{stage}</Typography>
                      </Box>
                    ))}
                  </Box>
                </>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}

      {success && (
        <Alert severity="success" sx={{ mt: 2 }}>
          {success}
        </Alert>
      )}
    </Box>
  );
};

export default ClaimEcosystemWorkflowGenerator;
