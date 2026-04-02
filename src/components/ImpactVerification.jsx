import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, HelpCircle, Clock } from 'lucide-react';
import { Card, CardHeader, CardContent } from './Card';
import Badge from './Badge';
import Button from './Button';

const ImpactVerification = ({ project, onVerify, isVerifying = false }) => {
  const [feedback, setFeedback] = useState('');

  const verificationCriteria = [
    {
      id: 'evidence',
      label: 'Sufficient Evidence Provided',
      description: 'Photos, videos, or documentation of project',
      required: true,
    },
    {
      id: 'impact',
      label: 'Clear Impact Demonstrated',
      description: 'Project shows measurable community benefit',
      required: true,
    },
    {
      id: 'scope',
      label: 'Appropriate Scope',
      description: 'Project scale matches participant level',
      required: false,
    },
  ];

  const handleApprove = () => {
    onVerify({ projectId: project.id, action: 'approve', feedback });
  };

  const handleReject = () => {
    onVerify({ projectId: project.id, action: 'reject', feedback });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Impact Verification
            </p>
          </div>
          <Badge variant={project.verificationStatus === 'verified' ? 'success' : 'warning'}>
            {project.verificationStatus}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Project Summary */}
        <div className="bg-gray-50 dark:bg-dark-card p-4 rounded-lg">
          <p className="text-sm font-medium mb-2">Description</p>
          <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
        </div>

        {/* Verification Checklist */}
        <div>
          <p className="font-semibold mb-4">Verification Criteria</p>
          <div className="space-y-3">
            {verificationCriteria.map((criterion) => (
              <motion.div
                key={criterion.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-start gap-3"
              >
                <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                  <HelpCircle className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-sm">{criterion.label}</p>
                    {criterion.required && (
                      <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-2 py-1 rounded">
                        Required
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    {criterion.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Feedback */}
        <div>
          <label className="block text-sm font-medium mb-2">Verification Feedback</label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Provide feedback to the participant..."
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button
            variant="success"
            onClick={handleApprove}
            disabled={isVerifying}
            className="flex-1 gap-2"
          >
            <CheckCircle className="w-4 h-4" />
            Approve
          </Button>
          <Button
            variant="danger"
            onClick={handleReject}
            disabled={isVerifying}
            className="flex-1 gap-2"
          >
            <AlertCircle className="w-4 h-4" />
            Request Changes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImpactVerification;
