import { describe, expect, it } from 'vitest';
import { translateJobStep } from './translate.js';

describe('translateJobStep', () => {
  it('should translate job specific steps', () => {
    expect(translateJobStep('en', 'update', 'downloading')).toBe('Downloading update');
    expect(translateJobStep('de', 'update', 'downloading')).toBe('Update wird heruntergeladen');
    expect(translateJobStep('de-DE', 'update', 'stoppedApplications')).toBe('Gestoppte Anwendungen');
  });

  it('should translate step keys sent by devices that differ from the original keys', () => {
    expect(translateJobStep('en', 'update', 'downloadedFinished')).toBe('Download finished');
    expect(translateJobStep('en', 'reboot', 'waitForOrders')).toBe('Wait for orders to be completed');
    expect(translateJobStep('en', 'restart-device', 'started')).toBe('Restart request sent');
    expect(translateJobStep('en', 'upload-logs', 'noCredentials')).toBe('No valid credentials for uploading to S3');
  });

  it('should ignore surrounding whitespace in step keys', () => {
    expect(translateJobStep('en', 'deactivate-device', ' deactivedPermanently')).toBe('Device deactivated permanently');
  });

  it('should fall back to common steps', () => {
    expect(translateJobStep('en', 'reboot', 'unknownOperation')).toBe(
      'Job will fail because it has an unknown operation',
    );
    expect(translateJobStep('en', 'upload-logs', 'failed')).toBe('Job failed to execute');
  });

  it('should fall back to default steps', () => {
    expect(translateJobStep('en', 'update', 'registered')).toBe(
      'Device has acknowledged and scheduled the job for execution',
    );
    expect(translateJobStep('en', 'shell', 'timeout')).toBe('Failed due to timeout');
  });

  it('should not fail for jobs without step translations', () => {
    expect(translateJobStep('en', 'shell', 'command will be executed')).toBe('command will be executed');
    expect(translateJobStep('en', 'robot-test', 'stopped containers')).toBe('stopped containers');
    expect(translateJobStep('en', 'unknown-job', 'someStep')).toBe('someStep');
  });

  it('should make free text readable', () => {
    expect(translateJobStep('en', 'update', '"unable to execute update\\n1"')).toBe('unable to execute update\n1');
    expect(translateJobStep('en', 'update', '"not json')).toBe('"not json');
    expect(translateJobStep('en', 'upload-logs', 'CUSTOM#https://example.com/logs.zip')).toBe(
      'https://example.com/logs.zip',
    );
  });

  it('should return an empty string for missing steps', () => {
    expect(translateJobStep('en', 'update', undefined)).toBe('');
    expect(translateJobStep('en', 'update', '')).toBe('');
  });
});
