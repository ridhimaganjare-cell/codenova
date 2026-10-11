import React from 'react';

/**
 * MetricCard component for Micro-Climatic and Detection Data
 */
export default function MetricCard({
  icon,
  label,
  value,
  unit = '',
  status = null,
  statusType = 'neutral' // 'neutral' | 'warning' | 'danger' | 'success'
}) {
  let statusBadgeStyle = {
    backgroundColor: 'var(--color-sage-bg)',
    color: 'var(--color-forest-primary)',
    border: '1px solid var(--color-sage-soft)'
  };

  if (statusType === 'danger') {
    statusBadgeStyle = {
      backgroundColor: 'var(--risk-high-bg)',
      color: 'var(--risk-high-text)',
      border: '1px solid var(--risk-high-border)'
    };
  } else if (statusType === 'warning') {
    statusBadgeStyle = {
      backgroundColor: 'var(--risk-mod-bg)',
      color: 'var(--risk-mod-text)',
      border: '1px solid var(--risk-mod-border)'
    };
  } else if (statusType === 'success') {
    statusBadgeStyle = {
      backgroundColor: 'var(--risk-low-bg)',
      color: 'var(--risk-low-text)',
      border: '1px solid var(--risk-low-border)'
    };
  }

  return (
    <div className="metric-card">
      <div className="metric-card-top">
        <span className="metric-label">{label}</span>
        {icon && (
          <div className="metric-icon-box" style={{ backgroundColor: 'var(--color-sage-bg)', color: 'var(--color-forest-primary)' }}>
            {icon}
          </div>
        )}
      </div>

      <div className="metric-value">
        {value}
        {unit && <span style={{ fontSize: '0.95rem', fontWeight: 600, marginLeft: '0.2rem', color: 'var(--color-text-secondary)' }}>{unit}</span>}
      </div>

      {status && (
        <span className="metric-subtext" style={statusBadgeStyle}>
          {status}
        </span>
      )}
    </div>
  );
}
