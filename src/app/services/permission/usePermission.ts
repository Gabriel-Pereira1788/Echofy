import {useEffect, useState} from 'react';

import {permissionService} from './permissionService';
import {PermissionName, PermissionStatus} from './types';

export function usePermission(permissionName: PermissionName) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<PermissionStatus>();

  async function checkPermission() {
    setLoading(true);
    try {
      await tryCheckPermission();
    } catch {
      setStatus('unavailable');
    } finally {
      setLoading(false);
    }
  }

  async function tryCheckPermission() {
    const initialStatus = await permissionService.check(permissionName);

    if (initialStatus === 'denied') {
      const _status = await permissionService.request(permissionName);
      setStatus(_status);
    } else {
      setStatus(initialStatus);
    }
  }

  useEffect(() => {
    checkPermission();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    status,
    checkPermission,
  };
}
