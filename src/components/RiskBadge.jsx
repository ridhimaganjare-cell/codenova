import React from 'react';
import { AlertTriangleIcon, ShieldAlertIcon, CheckCircleIcon } from './Icons';

/**
 * RiskBadge component for Low, Moderate, High disease warnings
 */
export default function RiskBadge({ level = 'Low', score = null, showDetails = false }) {
  const normalizedLevel = level.toLowerCase();

  let badgeStyle = {};
  let icon = null;
  let text = level;

  if (normalizedLevel === 'high') {
    badgeStyle = {
      backgroundColor: 'var(--risk-high-bg)',
      color: 'var(--risk-high-text)',
      border: '1px solid var(--risk-high-border)'
    };
    icon = <ShieldAlertIcon size={16} />;
  } else if (normalizedLevel === 'moderate' || normalizedLevel === 'medium') {
    badgeStyle = {
      backgroundColor: 'var(--risk-mod-bg)',
      color: 'var(--risk-mod-text)',
      border: '1px solid var(--risk-mod-border)'
    };
    icon = <AlertTriangleIcon size={16} />;
  } else {
    // Low / Safe
    badgeStyle = {
      backgroundColor: 'var(--risk-low-bg)',
      color: 'var(--risk-low-text)',
      border: '1px solid var(--risk-low-border)'
    };
    icon = <CheckCircleIcon size={16} />;
  }

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
      <span
        className="badge"
        style={{
          ...badgeStyle,
          padding: '0.35rem 0.85rem',
          fontSize: '0.825rem',
          fontWeight: '700',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem'
        }}
      >
        {icon}
        <span>{text} Risk</span>
        {score !== null && <span style={{ opacity: 0.8 }}>({score}/100)</span>}
      </span>
    </div>
  );
}
