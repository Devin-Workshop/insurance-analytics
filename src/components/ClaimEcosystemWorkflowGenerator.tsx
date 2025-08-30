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
  Chip
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
  { id: 'member-portal', name: 'Member Portal', color: '#2196F3', description: 'Customer self-service interface' },
  { id: 'regulatory-compliance', name: 'Regulatory Compliance', color: '#9C27B0', description: 'Compliance monitoring and reporting' },
  { id: 'provider-network', name: 'Provider Network', color: '#4CAF50', description: 'Healthcare provider management' },
  { id: 'auto-adjudication', name: 'Auto Adjudication', color: '#8BC34A', description: 'Automated claim processing' },
  { id: 'reporting-analytics', name: 'Reporting & Analytics', color: '#607D8B', description: 'Business intelligence and insights' },
  { id: 'data-warehouse', name: 'Data Warehouse', color: '#4CAF50', description: 'Centralized data storage' },
  { id: 'payment-processing', name: 'Payment Processing', color: '#F44336', description: 'Claims payment and disbursement' },
  { id: 'claims-intake', name: 'Claims Intake', color: '#9C27B0', description: 'Initial claim submission and validation' }
];

const ClaimEcosystemWorkflowGenerator: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedComponents, setSelectedComponents] = useState<string[]>(ecosystemComponents.map(c => c.id));
  const [workflowTitle, setWorkflowTitle] = useState('Dynamic Claim Ecosystem Workflow');
  const [workflowDescription, setWorkflowDescription] = useState('Comprehensive overview of the insurance claim processing ecosystem');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const generatePPTX = async () => {
    setIsGenerating(true);
    setError(null);
    setSuccess(null);

    try {
      const PptxGenJS = (await import('pptxgenjs')).default;
      const pptx = new PptxGenJS();

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
        const angle = (index * 2 * Math.PI) / selectedComponentsData.length - Math.PI / 2;
        const x = centerX + radius * Math.cos(angle) - 0.8;
        const y = centerY + radius * Math.sin(angle) - 0.4;

        ecosystemSlide.addShape('ellipse', {
          x: x,
          y: y,
          w: 1.6,
          h: 0.8,
          fill: { color: component.color.replace('#', '') },
          line: { color: 'FFFFFF', width: 1 }
        });

        ecosystemSlide.addText(component.name, {
          x: x,
          y: y + 0.1,
          w: 1.6,
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
          w: (x + 0.8) - centerX,
          h: (y + 0.4) - centerY,
          line: { color: 'CCCCCC', width: 2 }
        });
      });

      selectedComponentsData.forEach((component) => {
        const detailSlide = pptx.addSlide();
        
        detailSlide.addText(component.name, {
          x: 0.5,
          y: 0.5,
          w: 9,
          h: 0.8,
          fontSize: 28,
          bold: true,
          color: component.color.replace('#', ''),
          align: 'center'
        });

        detailSlide.addText(component.description, {
          x: 1,
          y: 1.5,
          w: 8,
          h: 1,
          fontSize: 18,
          color: '666666',
          align: 'center'
        });

        const workflowSteps = getComponentWorkflowSteps(component.id);
        workflowSteps.forEach((step, index) => {
          detailSlide.addText(`${index + 1}. ${step}`, {
            x: 1,
            y: 3 + (index * 0.6),
            w: 8,
            h: 0.5,
            fontSize: 14,
            color: '333333'
          });
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

  const getComponentWorkflowSteps = (componentId: string): string[] => {
    const workflows: Record<string, string[]> = {
      'member-portal': [
        'Member logs into portal',
        'Accesses claim submission form',
        'Uploads required documents',
        'Submits claim for processing',
        'Receives confirmation and tracking number'
      ],
      'regulatory-compliance': [
        'Monitor regulatory requirements',
        'Validate claim against compliance rules',
        'Generate compliance reports',
        'Submit required regulatory filings',
        'Maintain audit trail'
      ],
      'provider-network': [
        'Verify provider credentials',
        'Check network participation status',
        'Validate service authorization',
        'Process provider payments',
        'Maintain provider directory'
      ],
      'auto-adjudication': [
        'Receive claim data',
        'Apply business rules engine',
        'Perform automated validation',
        'Calculate payment amount',
        'Route for manual review if needed'
      ],
      'reporting-analytics': [
        'Collect claim data',
        'Generate performance metrics',
        'Create analytical reports',
        'Identify trends and patterns',
        'Provide business insights'
      ],
      'data-warehouse': [
        'Ingest claim data from multiple sources',
        'Transform and cleanse data',
        'Store in structured format',
        'Maintain data quality',
        'Provide data access for reporting'
      ],
      'payment-processing': [
        'Receive approved claim',
        'Validate payment details',
        'Process electronic payment',
        'Generate payment confirmation',
        'Update claim status'
      ],
      'claims-intake': [
        'Receive initial claim submission',
        'Perform initial validation',
        'Assign claim number',
        'Route to appropriate processor',
        'Send acknowledgment to claimant'
      ]
    };
    return workflows[componentId] || ['Process workflow steps', 'Handle component operations', 'Complete processing'];
  };

  const handleComponentToggle = (componentId: string) => {
    setSelectedComponents(prev => 
      prev.includes(componentId) 
        ? prev.filter(id => id !== componentId)
        : [...prev, componentId]
    );
  };

  return (
    <Box sx={{ py: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
        <AccountTreeIcon fontSize="large" />
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
                  multiline
                  rows={2}
                  label="Workflow Description"
                  value={workflowDescription}
                  onChange={(e) => setWorkflowDescription(e.target.value)}
                  margin="normal"
                />
              </Grid>
            </Grid>
          </Paper>

          <Paper sx={{ p: 3 }}>
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

            <Button
              variant="contained"
              size="large"
              onClick={generatePPTX}
              disabled={isGenerating || selectedComponents.length === 0}
              startIcon={isGenerating ? <CircularProgress size={20} /> : <DownloadIcon />}
              sx={{ mt: 2 }}
            >
              {isGenerating ? 'Generating PPTX...' : 'Generate & Download PPTX'}
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Preview
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                Selected Components: {selectedComponents.length}
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {ecosystemComponents
                  .filter(comp => selectedComponents.includes(comp.id))
                  .map((component) => (
                    <Box
                      key={component.id}
                      sx={{
                        p: 1,
                        borderRadius: 1,
                        backgroundColor: component.color,
                        color: 'white',
                        fontSize: '0.875rem',
                        textAlign: 'center'
                      }}
                    >
                      {component.name}
                    </Box>
                  ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {error && (
        <Alert severity="error" sx={{ mt: 3 }}>
          {error}
        </Alert>
      )}

      {success && (
        <Alert severity="success" sx={{ mt: 3 }}>
          {success}
        </Alert>
      )}
    </Box>
  );
};

export default ClaimEcosystemWorkflowGenerator;
