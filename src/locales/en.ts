const en = {
  deviceStates: {
    Unknown: 'Unknown',
    Available: 'Available',
    AvailableAfterRestart: 'Restart necessary',
    Disabled: 'Disabled',
    Error: 'Fault',
    JobDone: 'Finished',
    Maintenance: 'Maintenance',
    ProcessingJob: 'Processing job',
    ShutDown: 'Shutdown',
  },
  customerFeedback: {
    inProduction: 'In Production',
    startsSoon: 'In Queue',
    gate: 'Door',
    ice: 'Ice',
    brew: 'Brew',
    print: 'Print',
    ready: 'Ready',
    appstate: 'Your MyAppCafé Box will be available again shortly.',
    ordersblocked: 'Your MyAppCafé Box currently does not accept new orders.',
  },
  deviceTypes: {
    CoffeeMachine_WMF9000s_one: 'Coffee machine',
    CoffeeMachine_WMF9000s_other: 'Coffee machines',
    CupHolder_one: 'Cup holder',
    CupHolder_other: 'Cup holders',
    DisplayDevice_one: 'Display',
    DisplayDevice_other: 'Displays',
    Gate_one: 'Door',
    Gate_other: 'Doors',
    PaymentTerminalAdyen_one: 'Payment terminal',
    PaymentTerminalAdyen_other: 'Payment terminals',
    PaymentTerminalCastle_one: 'Payment terminal',
    PaymentTerminalCastle_other: 'Payment terminals',
    PaymentTerminalDummy: 'Placeholder payment terminal',
    RippleMakerMkII_one: 'Printer',
    RippleMakerMkII_other: 'Printers',
    Robot_one: 'Robot',
    Robot_other: 'Robots',
    Scanner_one: 'Scanner',
    Scanner_other: 'Scanners',
  },
  goods: {
    bean1: 'Bean1',
    bean2: 'Bean2',
    category: 'Category',
    powder: 'Chocolate',
    cup: 'Cup',
    extraStrong: 'extra strong',
    id: 'ID',
    milk: 'Milk',
    milk1: 'Milk1',
    milk2: 'Milk2',
    name: 'Name',
    noSyrup: 'no syrup',
    price: 'Price',
    print: 'Print',
    sirup1: 'Syrup1',
    sirup2: 'Syrup2',
    sirup3: 'Syrup3',
    sirup4: 'Syrup4',
    size: 'Size',
    syrup: 'Syrup',
  },
  serverStates: {
    FatalError: 'Fault',
    Maintenance: 'Maintenance',
    NeverInitialized: 'Not started',
    Okay: 'Okay',
    Paused: 'Paused',
    Pausing: 'Pausing...',
    Restarting: 'Restarting...',
    Starting: 'Starting...',
    Update: 'Update',
    Updating: 'Updating',
    closed: 'Not connected',
    continue: 'Continue',
    title: 'Current status:',
  },
  jobs: {
    cautions: {
      'recover-robot':
        'A precise visual inspection is necessary! The robot drives directly to the maintenance position. There must be no objects in the travel path.',
      'remove-orders': 'Orders that are already in production are not affected.',
      'restart-device': 'If a power cycle is needed for restart, the application will be paused and unpaused.',
      shutdown:
        "All subsequent commands except 'Startup' and 'Update' will fail. 'Not connected' is displayed on the maintenance screen.",
      trash: 'Ensure that the cup tray of the selected device is in the down position.',
    },
    descriptions: {
      'block-orders':
        'All subsequent orders will be blocked. Orders that have already been placed will still be processed.',
      'check-device': 'Tests a device for functionality. If successful, the device processes orders again.',
      'deactivate-device': 'The device will no longer process orders. Use *Check device* to reactivate.',
      'disable-notifications': 'No more messages will be sent until the next time the box is started.',
      'enable-notifications':
        'Enables notification broadcast for this box. Only necessary when notifications have been disabled before.',
      'end-maintenance': 'Complete maintenance mode',
      init: 'Starts operation of the box.',
      lights: 'Turns the lights and TV monitors on or off',
      message: 'Sends a message to all subscribers via the MyAppCafé bot.',
      pause: 'Puts the box on pause.',
      reboot: 'Restarts the server.',
      'recover-robot':
        'After the box is opened during a robot movement, the next launch is blocked as the robot may be in an unsafe position. After a thorough check, the robot can be released again with this command.',
      'reload-config':
        'Downloads the latest configuration. If the box is already in operation, the changes will only take effect after the next restart.',
      'remove-orders': 'Removes all saved orders.',
      'remove-start': 'Removes an existing autostart.',
      'reset-redis': 'Performs a clean shutdown in Redis and removes robot blockages.',
      'restart-device': 'Reboots a device.',
      'robot-command': 'Executes a single robot command.',
      'robot-test': 'Tests all robot commands.',
      'set-server-state': 'Changes the status of the server without the processes otherwise required for this.',
      'set-start': 'Resets the time for the next autostart. If an autostart is set up, it will be overwritten.',
      shell: 'Runs a shell command on the host machine.',
      shutdown: 'Shuts down the control application.',
      start:
        'Starts the application. This does NOT mean that the box is ready for use, just that the control application is started. There is a separate command for starting the box.',
      'start-maintenance': 'Started maintenance mode',
      'test-beverage': 'Produces a random drink. If possible, the test drink is ordered with a print.',
      trash: 'Performs a disposal drive with the robot.',
      'unblock-orders': 'Unblocks orders (if they have been blocked with *Block orders* before).',
      unpause: 'Immediately ends the break.',
      update: 'Downloads the latest version of the control application.',
      'upload-logs': 'Uploads logs from myappcafecontrol.service to S3.',
    },
    names: {
      'block-orders': 'Block Orders',
      'check-device': 'Check device',
      'deactivate-device': 'Deactivate device',
      'disable-notifications': 'Mute telegram',
      'enable-notifications': 'Unmute telegram',
      'end-maintenance': 'end maintenance',
      init: 'Launch box',
      lights: 'light on/off',
      message: 'Send telegram message',
      pause: 'Pause',
      reboot: 'Reboot server',
      'recover-robot': 'Recover robot',
      'reload-config': 'Reload configuration',
      'remove-orders': 'Remove orders',
      'remove-start': 'Remove start time (no autostart)',
      'reset-redis': 'Redis reset',
      'restart-device': 'Reboot device',
      'robot-command': 'Send robot command',
      'robot-test': 'Perform robot-test',
      'set-server-state': 'Set server status',
      'set-start': 'Set start time',
      shell: 'Run shell command',
      shutdown: 'Shut down program',
      start: 'Start program',
      'start-maintenance': 'start maintenance',
      'test-beverage': 'Test beverage',
      trash: 'Perform trash-move',
      'unblock-orders': 'Unblock Orders',
      unpause: 'Unpause',
      update: 'Update',
      'upload-logs': 'Upload journalctl',
    },
    optionNames: {
      autostart: 'timing',
      devicedisabled: 'disable device',
      deviceshutdown: 'Turn off device',
      forced: 'forced',
      hard: 'Hard',
      'immediate-restart': 'Instantly',
      'no-autostart': 'No auto start',
      off: 'Out of',
      on: 'On',
      soft: 'normal',
    },
    options: {
      'deactivate-device': {
        devicedisabled:
          'Device will be permanently disabled. Reactivation is only possible after restart or maintenance of the unit. Should you later run *Check Device*, the job will always fail, but the device will be scheduled again after the next reboot.',
        deviceshutdown: 'Device will be considered for job execution again after next init.',
      },
      'end-maintenance': {
        autostart: 'A time can be selected at which the autostart is carried out',
        'immediate-restart': 'The box will reboot immediately after the maintenance is complete',
        'no-autostart': 'No autostart is scheduled. \nThe box must be started manually',
      },
      init: {
        forced:
          'Performs initialization of all devices and starts production. If already running, the box will be reinitialized regardless of the current application state. All devices will be power-cycled. **Open orders will be deleted.**',
        hard: 'Performs initialization of all devices and starts production. If the box has been initialized before, it will be reinitialized, but only after all current orders have been completed. If orders are not finished after 10 minutes, the box will be reinitialized nonetheless. Open orders will be reproduced after reinit is finished.',
        soft: 'Performs initialization of all devices and starts production. **No reinit if the box has already been initialized.**',
      },
      lights: {
        off: 'Turn off the lights and TV monitors',
        on: 'Turn on the lights and TV monitors',
      },
      pause: {
        hard: "Pauses the application immediately. Fails if application is not state 'Okay'. Production is stopped until you unpause the application.",
        soft: "Pauses the application after all current orders have been completed. **Fails if application is not state 'Okay'**",
      },
      reboot: {
        forced: 'Reboots the main server regardless of the current application state.',
        hard: 'Reboots the main server after current orders have been completed.',
        soft: 'Reboots the main server after next maintenance or if init has not been performed yet.',
      },
      'reload-config': {
        forced: 'A (re)start will be executed immediately. The box will use the new configuration after this startup.',
        hard: 'A (re)start is scheduled after all current orders have been completed. The box will use the new configuration after this startup.',
        soft: 'Configuration will be used after next startup.',
      },
      shutdown: {
        forced:
          'Shuts the application down immediately, regardless of current orders. Open orders will be deleted, but only if the server is currently running.',
        hard: 'Shuts the application down regardless of current orders. Open orders will be reproduced after next init.',
        soft: 'Shuts the application down, but waits for all orders to be finished. If orders are not finished after 10 minutes, the application will be shut down nonetheless. Open orders will be reproduced after next init.',
      },
      start: {
        forced:
          'Starts the application. If already running, the application is restarted regardless of its current state. All devices will be power-cycled. Open orders will be deleted. **Init will not be performed automatically.**',
        hard: 'Starts the application. If the box has been initialized before, the application is restarted, but only after all current orders have been completed. If orders are not finished after 10 minutes, the application will be restarted nonetheless. Open orders will be reproduced on next startup. **Init will not be performed automatically.**',
        soft: 'Starts the application. **Does not restart the application if already running.**',
      },
      'start-maintenance': {
        hard: 'Maintenance is started immediately, regardless of the running orders.',
        soft: 'Maintenance will not start until all currently running orders have ended.',
      },
      update: {
        forced:
          'If the application is currently running, the update will be executed immediately, regardless of the units current state.',
        hard: 'If the application is currently running, the update will be executed after all current orders have been completed.',
        soft: 'If the application is currently running, the update will be executed after the next maintenance is completed.',
      },
    },
    parameters: {
      'check-device': {
        device: 'Which device should be checked?',
      },
      'deactivate-device': {
        device: 'Which device should be deactivated?',
      },
      'end-maintenance': {
        leftPrinterCartridge: 'Was the left printer cartridge changed?',
        rebootTime: 'When should the box be initialised?',
        rightPrinterCartridge: 'Has the right printer cartridge been changed?',
      },
      message: {
        message: 'Enter the message to be sent to the box.',
      },
      'restart-device': {
        device: 'Which device to restart?',
      },
      'robot-command': {
        command: 'Enter the command to be sent to the robot.',
      },
      'robot-test': {
        includeForTest: 'Select the sequences you want to test.',
      },
      'set-server-state': {
        newstate: 'Select the new status.',
      },
      'set-start': {
        rebootTime: 'When to restart the server?',
      },
      shell: {
        command: 'Enter the command to be run.',
      },
      'test-beverage': {
        amount: 'How many drinks should be produced?',
      },
      trash: {
        device: 'On which device should the disposal trip be carried out?',
      },
    },
    status: {
      CANCELED: 'Canceled',
      FAILED: 'Failed',
      IN_PROGRESS: 'In progress',
      QUEUED: 'In queue',
      SUCCEEDED: 'Success',
      TIMED_OUT: 'Time-out',
      UNKNOWN: 'unknown',
    },
    steps: {
      default: {
        registered: 'Device has acknowledged and scheduled the job for execution',
        timeout: 'Failed due to timeout',
        cancelled: 'Cancelled',
      },
      'block-orders': {
        allOrdersFinished: 'All orders finished',
        failed: 'Orders could not be blocked',
        ordersBlocked: 'Orders blocked',
        registered: 'Job registered',
      },
      'check-device': {
        deviceTestFailed: 'Device test returned false',
        deviceTestedSuccessfully: 'Device tested successfully',
        noTestPossible: 'Device could not be tested',
        started: 'Device test started',
      },
      common: {
        alreadyInProgress:
          'Received a job in progress that should not survive agent restart, so it must have failed before. Explicitly failing now',
        failed: 'Job failed to execute',
        optionNotSet: 'Job will fail because a mandatory option is missing',
        success: 'Job successfully executed',
        unknown: 'Job failed for unknown reasons',
        unknownOperation: 'Job will fail because it has an unknown operation',
        wrongState: 'Job will fail because it has a state condition that is not met by the current server state',
      },
      'deactivate-device': {
        deactivedPermanently: 'Device deactivated permanently',
        deactivedTemporarily: 'Device deactivated temporarily',
        notPossible: 'Device could not be deactivated',
        sentRequest: 'Deactivation request sent',
      },
      'disable-notifications': 'Mute telegram',
      'enable-notifications': 'Unmute telegram',
      endMaintenance: {
        autostartFinished: 'Autostart complete',
        autostartSet: 'Autostart set',
        autostarted: 'Autostart started',
        failed: 'Maintenance could not be completed',
        registered: 'Command to stop maintenance registered',
        success: 'Maintenance completed successfully',
      },
      init: {
        allOrdersFinished: 'All orders finished',
        alreadyCorrectState: 'Init not necessary',
        failed: 'Init failed',
        initStarted: 'Start command sent',
        registered: 'Init registered',
        serverShutdown: 'Application shutdown',
        success: 'Init successful',
        waitOrdersFinished: 'Waiting for orders to be finished',
      },
      message: {
        messageFailed: 'Sending message failed',
        sentMessage: 'Message sent',
      },
      pause: {
        allOrdersFinished: 'All orders finished',
        failed: 'Pause failed',
        incorrectState: 'Pause not possible because the server is not in the correct state',
        success: 'Unit paused',
        waitOrdersFinished: 'Waiting for orders to be finished',
        wrongStateResult: 'Pause was requested, but the application is not in the correct state right now',
      },
      reboot: {
        allOrdersFinished: 'All orders completed',
        failed: 'Reboot failed',
        rebootSuccessful: 'Server restarted successfully',
        rebooting: 'Server is restarted',
        registered: 'reboot registered',
        scheduled: 'Server will restart in a minute',
        success: 'Reboot complete and application launched',
        waitOrdersFinished: 'Wait for orders to be completed',
        waitUntilPossible: 'Wait until restart can be performed',
      },
      'recover-robot': {
        connecting: 'Connecting to database',
        failed: 'No connection to database',
        keysRemoved: 'Keys removed',
        removingKeys: 'Removing keys from database',
        success: 'Robot lock removed',
      },
      'reload-config': {
        allOrdersFinished: 'All orders finished',
        initStarted: 'Init started',
        initialized: 'Application initialized',
        notPossible: 'Config could not be reloaded',
        registered: 'Reload config registered',
        serverShutdown: 'Application shutdown',
        serverStarted: 'Application started',
        waitOrdersFinished: 'Waiting for orders to be finished',
      },
      'remove-orders': {
        connecting: 'Connecting to database',
        failed: 'Orders could not be removed',
        ordersRemoved: 'All orders have been removed',
        removingKeys: 'Removing keys from database',
      },
      'remove-start': {
        failed: 'Autostart could not be removed',
        startRemoved: 'Autostart removed',
      },
      'reset-redis': {
        connecting: 'Connecting to database',
        failed: 'Database could not be disconnected',
        keysRemoved: 'Keys removed',
        removingKeys: 'Removing keys from database',
        settingCleanShutdown: 'Setting clean shutdown flag',
        success: 'Database disconnected and robot recovered',
      },
      'restart-device': {
        notPossible: 'Device could not be restarted',
        restarted: 'Device restarted',
        sentRequest: 'Restart request sent',
      },
      'robot-command': {
        commandFailed: 'Command failed',
        notPossible: 'Command could not be sent',
        sentCommand: 'Command sent',
      },
      'robot-test': 'Perform robot-test',
      'set-server-state': {
        notPossible: 'State could not be changed',
        sentRequest: 'State change request sent',
        stateChanged: 'State changed',
      },
      'set-start': {
        failed: 'Autostart could not be set',
        startSet: 'Autostart set',
      },
      shell: 'Run shell command',
      shutdown: {
        allOrdersFinished: 'All orders finished',
        deletingOldOrders: 'Deleting all running orders',
        failed: 'Shutdown failed',
        pauseBeforeShutdown: 'Pausing before shutdown',
        registered: 'Shutdown registered',
        shuttingDown: 'Shutting down application',
        success: 'Shutdown successful',
        waitOrdersFinished: 'Waiting for orders to be finished',
      },
      start: {
        allOrdersFinished: 'All orders finished',
        failed: 'Application could not be started',
        registered: 'Start registered',
        serverShutdown: 'Application shutdown',
        serverStarted: 'Application started',
        waitOrdersFinished: 'Waiting for orders to be finished',
      },
      'start-maintenance': {
        allOrdersFinished: 'All orders completed',
        doorsOpen: 'Issues open, screens and robots turned off',
        failed: 'Failed to start maintenance mode',
        registered: 'Start maintenance command registered',
        robotStop: 'The robot is stopped. \nBox can be opened.',
        success: 'Maintenance mode started successfully',
        waitOrdersFinished: 'Wait for orders to be completed',
      },
      'test-beverage': {
        failed: 'Test beverages could not be ordered',
        success: 'Test beverages ordered',
      },
      trash: {
        finished: 'Trash move finished',
        notPossible: 'Trash move could not be started or was not successful',
        started: 'Trash move started',
      },
      'unblock-orders': {
        failed: 'Orders could not be unblocked',
        ordersUnblocked: 'Orders unblocked',
        registered: 'Job registered',
      },
      unpause: {
        failed: 'Unit still in Pause',
        incorrectState: "Box hasn't been paused",
        success: 'Pause ended',
      },
      update: {
        allOrdersFinished: 'All orders finished',
        downloadFinished: 'Download finished',
        downloading: 'Downloading update',
        restartedApplications: 'Restarted applications',
        restartingApplications: 'Restarting applications',
        scheduled: 'Update scheduled',
        serverShutdown: 'Application shutdown',
        stoppedApplications: 'Stopped applications',
        success: 'Update successful',
        waitForMaintenance: 'Wait for maintenance to finish',
        waitOrdersFinished: 'Waiting for orders to be finished',
      },
      'upload-logs': {
        credentials: 'Received valid credentials for uploading to S3',
        filesUploaded: 'Uploaded log files to S3',
        filesWritten: 'Wrote log files to disk',
        registered: 'Upload logs job registered',
      },
    },
  },
};
export type Translation = typeof en;
export default en;
