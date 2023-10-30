import { Translation } from './en';

const de: Translation = {
  deviceStates: {
    Unknown: 'Unbekannt',
    Available: 'Verfügbar',
    AvailableAfterRestart: 'Neustart notwendig',
    Disabled: 'Deaktiviert',
    Error: 'Störung',
    JobDone: 'Fertig',
    Maintenance: 'Wartung',
    ProcessingJob: 'Beschäftigt',
    ShutDown: 'Aus',
  },
  customerFeedback: {
    appstate: 'Deine MyAppCafé-Bar wird gleich wieder verfügbar sein.',
    ordersblocked: 'Deine MyAppCafé-Bar nimmt derzeit keine neuen Bestellungen an.',
    ready: 'Fertig',
    inProduction: 'Jetzt in Bearbeitung',
    startsSoon: 'in Kürze',
    gate: 'Ausgabe',
    ice: 'Eis',
    brew: 'Kaffee',
    print: 'Druck',
  },
  deviceTypes: {
    CoffeeMachine_WMF9000s_one: 'Kaffeemaschine',
    CoffeeMachine_WMF9000s_other: 'Kaffeemaschinen',
    CupHolder_one: 'Becherhalter',
    CupHolder_other: 'Becherhalter',
    DisplayDevice_one: 'Display',
    DisplayDevice_other: 'Displays',
    Gate_one: 'Ausgabe',
    Gate_other: 'Ausgaben',
    PaymentTerminalAdyen_one: 'Kreditkartenlesegerät',
    PaymentTerminalAdyen_other: 'Kreditkartenlesegeräte',
    PaymentTerminalCastle_one: 'Kreditkartenlesegerät',
    PaymentTerminalCastle_other: 'Kreditkartenlesegeräte',
    PaymentTerminalDummy: 'Platzhalter Kreditkartenlesegerät',
    RippleMakerMkII_one: 'Lebensmitteldrucker',
    RippleMakerMkII_other: 'Lebensmitteldrucker',
    Robot_one: 'Roboter',
    Robot_other: 'Roboter',
    Scanner_one: 'Scanner',
    Scanner_other: 'Scanner',
  },
  serverStates: {
    FatalError: 'Störung',
    Maintenance: 'Wartung',
    NeverInitialized: 'Nicht gestartet',
    Okay: 'Okay',
    Paused: 'Pause',
    Pausing: 'Halte an...',
    Restarting: 'Startet neu',
    Starting: 'Startet...',
    Update: 'Update',
    Updating: 'Update',
    closed: 'Nicht verbunden',
    continue: 'Weiter',
    title: 'Aktueller Status:',
  },
  goods: {
    bean1: 'Bohne1',
    bean2: 'Bohne2',
    category: 'Kategorie',
    powder: 'Schoko',
    cup: 'Becher',
    extraStrong: 'extra stark',
    id: 'ID',
    milk: 'Milch',
    milk1: 'Milch1',
    milk2: 'Milch2',
    name: 'Name',
    noSyrup: 'kein Sirup',
    price: 'Preis',
    print: 'Druck',
    sirup1: 'Sirup1',
    sirup2: 'Sirup2',
    sirup3: 'Sirup3',
    sirup4: 'Sirup4',
    size: 'Größe',
    syrup: 'Sirup',
  },
  jobs: {
    cautions: {
      'recover-robot':
        'Eine genaue optische Prüfung ist notwendig! Der Roboter fährt auf direktem Weg zur Wartungsposition. In dem Verfahrweg dürfen sich keine Gegenstände befinden.',
      'remove-orders': 'Bereits in Produktion befindliche Bestellungen sind hiervon nicht betroffen.',
      'restart-device':
        'Bei einigen Geräten ist es für einen Neustart notwendig, dass die Box kurzzeitig in Pause geht.',
      shutdown:
        "Alle nachfolgenden Befehle mit Ausnahme von 'Programmstart' und 'Update' werden scheitern. Auf dem Wartungsbildschirm wird 'Nicht verbunden' angezeigt.",
      trash: 'Stellen Sie sicher, dass sich der Tassentisch des ausgewählten Gerätes in der unteren Position befindet.',
    },
    names: {
      'block-orders': 'Bestellungen blockieren',
      'check-device': 'Gerät prüfen',
      'deactivate-device': 'Gerät ausplanen',
      'disable-notifications': 'Telegram stummschalten',
      'enable-notifications': 'Telegram einschalten',
      'end-maintenance': 'Wartung beenden',
      init: 'Box-Start',
      lights: 'Licht an/aus',
      message: 'Telegram-Nachricht schicken',
      pause: 'Pause',
      reboot: 'Server neustarten',
      'recover-robot': 'Roboter freigeben',
      'reload-config': 'Konfiguration aktualisieren',
      'remove-orders': 'Bestellungen entfernen',
      'remove-start': 'Startzeit entfernen (kein Autostart)',
      'reset-redis': 'Redis-Reset',
      'restart-device': 'Gerät neustarten',
      'robot-command': 'Roboter-Befehl senden',
      'robot-test': 'Roboter testen',
      'set-server-state': 'Server-Status setzen',
      'set-start': 'Startzeit setzen',
      shell: 'Shell-Befehl ausführen',
      shutdown: 'Programm herunterfahren',
      start: 'Programmstart',
      'start-maintenance': 'Wartung starten',
      'test-beverage': 'Testgetränk',
      trash: 'Entsorgung',
      'unblock-orders': 'Bestellungsblockierung aufheben',
      unpause: 'Pause beenden',
      update: 'Update',
      'upload-logs': 'Journalctl hochladen',
    },
    descriptions: {
      'block-orders':
        'Alle nachfolgenden Bestellungen werden blockiert. Bereits abgegebene Bestellungen werden noch abgearbeitet.',
      'check-device': 'Prüft ein Gerät auf Funktionsfähigkeit. Bei Erfolg arbeitet das Gerät wieder Bestellungen ab.',
      'deactivate-device': 'Das Gerät wird keine Bestellungen mehr bearbeiten.',
      'disable-notifications': 'Bis zum nächsten Start der Box werden keine Nachrichten mehr verschickt.',
      'enable-notifications':
        'Es werden wieder Benachrichtigungen verschickt. Nur sinnvoll, wenn zuvor die Benachrichtigungen deaktiviert wurden.',
      'end-maintenance': 'Schließt den Wartungsmodus ab',
      init: 'Startet den Betrieb der Box.',
      lights: 'Schaltet das Licht sowie die TV-Monitore ein oder aus',
      message: 'Sendet eine Nachricht über den MyAppCafé-Bot an alle Abonennten.',
      pause: 'Versetzt die Box in Pause.',
      reboot: 'Startet den Server neu.',
      'recover-robot':
        'Nachdem die Box während einer Roboterbewegung geöffnet wurde, ist der nächste Start gesperrt, da sich der Roboter evtl. in einer unsicheren Position befindet. Nach gründlicher Prüfung kann mit diesem Befehl der Roboter wieder freigegeben werden.',
      'reload-config':
        'Lädt sich die aktuellste Konfiguration herunter. Sollte die Box bereits in Betrieb sein, werden die Änderungen erst nach dem nächsten Neustart Auswirkungen haben.',
      'remove-orders': 'Entfernt alle gespeicherten Bestellungen.',
      'remove-start': 'Entfernt einen eventuell vorhandenen Autostart.',
      'reset-redis': 'Setzt einen cleanen Shutdown in Redis und entfernt Roboter-Blockaden.',
      'restart-device': 'Startet ein Gerät neu.',
      'robot-command': 'Führt einen einzelnen Roboter-Befehl aus.',
      'robot-test': 'Testet alle Befehle des Roboters.',
      'set-server-state': 'Ändert den Status des Servers, ohne die sonst dafür notwendigen Prozesse.',
      'set-start':
        'Setzt die Zeit für den nächsten Autostart neu. Sollte ein Autostart eingerichtet sein, wird dieser überschrieben.',
      shell: 'Führt einen Shell-Befehl auf der Hostmaschine aus.',
      shutdown: 'Fährt die Steuerungsanwendung herunter.',
      start:
        'Startet die Anwendung. Das bedeutet NICHT, dass die Box betriebsbereit ist, sondern lediglich, dass die Steuerungsanwendung gestartet wird. Für den Start der Box gibt es einen separaten Befehl.',
      'start-maintenance': 'Started den Wartungsmodus',
      'test-beverage': 'Produziert ein zufälliges Getränk. Wenn möglich wird das Testgetränk mit Druck bestellt.',
      trash: 'Führt eine Entsorgungsfahrt mit dem Roboter durch.',
      'unblock-orders':
        'Entsperrt das Blockieren neuer Bestellungen (nur wenn sie vorher mit *Bestellungen blockieren* gesperrt wurden).',
      unpause: 'Beendet die Pause unmittelbar.',
      update: 'Lädt die aktuellste Version der Steurungsanwendung herunter.',
      'upload-logs': 'Lädt Protokolle von myappcafecontrol.service auf S3 hoch.',
    },
    options: {
      'deactivate-device': {
        devicedisabled:
          'Das Gerät wird dauerhaft deaktiviert. **Eine Reaktivierung ist erst nach Neustart der Box möglich. Sollten Sie später *Gerät prüfen* durchführen, wird der Job immer scheitern, aber das Gerät wird nach dem nächsten Neustart wieder eingeplant.**',
        deviceshutdown: 'Das Gerät wird nach dem nächsten Init wieder für die Auftragsausführung berücksichtigt.',
      },
      'end-maintenance': {
        autostart: 'Es kann eine Zeit gewählt werden, zu der der Autostart durchgeführt wird',
        'immediate-restart': 'Die Box wird nach Abschluss der Wartung sofort neugestartet',
        'no-autostart': 'Es wird kein Autostart eingeplant. Die Box muss manuell gestartet werden',
      },
      init: {
        forced:
          'Führt die Initialisierung aller Geräte durch und startet die Produktion. Wenn die Box bereits läuft, wird sie unabhängig vom aktuellen Anwendungsstatus neu initialisiert. Alle Geräte werden vom Stromnetz getrennt. **Offene Aufträge werden gelöscht.**',
        hard: 'Führt die Initialisierung aller Geräte durch und startet die Produktion. Wurde die Box bereits zuvor initialisiert, wird sie erneut initialisiert, jedoch erst, nachdem alle aktuellen Aufträge abgeschlossen wurden. Wenn die Aufträge nach 10 Minuten noch nicht abgeschlossen sind, wird die Box trotzdem neu initialisiert. Offene Aufträge werden nach Abschluss der Reinitialisierung reproduziert.',
        soft: 'Führt die Initialisierung aller Geräte durch und startet die Produktion. **Kein Reinit, wenn die Box bereits initialisiert wurde**.',
      },
      lights: {
        off: 'Schaltet die Lichter und TV-Monitore aus',
        on: 'Schaltet die Lichter und TV-Monitore ein',
      },
      pause: {
        hard: "Hält die Anwendung sofort an. **Schlägt fehl, wenn die Anwendung nicht den Status 'Okay' hat.** Die Produktion wird erst fortgeführt, wenn Sie die Pause beenden.",
        soft: "Hält die Anwendung an, nachdem alle laufenden Aufträge abgeschlossen wurden. **Schlägt fehl, wenn die Anwendung nicht den Status 'Okay' hat.**",
      },
      reboot: {
        forced: 'Startet den Hauptserver unabhängig vom aktuellen Anwendungsstatus neu.',
        hard: 'Startet den Hauptserver neu, nachdem die aktuellen Aufträge abgeschlossen wurden.',
        soft: 'Startet den Hauptserver nach der nächsten Wartung neu oder sofort, wenn noch keine Initialisierung durchgeführt wurde.',
      },
      'reload-config': {
        forced:
          'Es wird sofort ein (Neu-)Start durchgeführt, wonach die Box die neue Konfiguration verwendet. **Offene Aufträge werden gelöscht.**',
        hard: 'Ein (Neu-)Start wird geplant, nachdem alle laufenden Aufträge abgeschlossen sind. Die Box wird nach diesem Start die neue Konfiguration verwenden.',
        soft: 'Die Konfiguration wird **nach der nächsten Wartung** verwendet.',
      },
      shutdown: {
        forced:
          'Schaltet die Anwendung sofort ab, unabhängig von den laufenden Aufträgen. Offene Aufträge werden gelöscht, aber nur, wenn der Server gerade läuft.',
        hard: 'Beendet die Anwendung unabhängig von den laufenden Aufträgen. Offene Aufträge werden nach dem nächsten init reproduziert.',
        soft: 'Schaltet die Anwendung ab, wartet aber, bis alle Aufträge abgeschlossen sind. Wenn die Aufträge nach 10 Minuten noch nicht abgeschlossen sind, wird die Anwendung trotzdem beendet. Offene Aufträge werden nach dem nächsten init reproduziert.',
      },
      start: {
        forced:
          'Startet die Anwendung. Wenn die Anwendung bereits läuft, wird sie unabhängig von ihrem aktuellen Zustand neu gestartet. Alle Geräte werden vom Stromnetz getrennt. Offene Aufträge werden gelöscht. **Init wird nicht automatisch durchgeführt.**',
        hard: 'Startet die Anwendung. Wenn die Box zuvor initialisiert wurde, wird die Anwendung neu gestartet, aber erst, nachdem alle laufenden Aufträge abgeschlossen wurden. Wenn die Aufträge nach 10 Minuten noch nicht abgeschlossen sind, wird die Anwendung trotzdem neu gestartet. Offene Aufträge werden beim nächsten Start reproduziert. **Init wird nicht automatisch durchgeführt.**',
        soft: 'Startet die Anwendung. Wenn die Anwendung bereits läuft, wird sie nicht neu gestartet.',
      },
      'start-maintenance': {
        hard: 'Wartung wird sofort gestartet, unabhängig von den laufenden Aufträgen.',
        soft: 'Wartung wird erst gestartet, wenn alle derzeit laufenden Bestellungen beendet sind.',
      },
      update: {
        forced:
          'Wenn die Anwendung gerade läuft, wird die Aktualisierung sofort ausgeführt, unabhängig vom aktuellen Zustand des Geräts.',
        hard: 'Wenn die Anwendung gerade läuft, wird die Aktualisierung ausgeführt, nachdem alle laufenden Aufträge abgeschlossen wurden.',
        soft: 'Wenn die Anwendung gerade läuft, wird die Aktualisierung nach Abschluss der nächsten Wartung durchgeführt.',
      },
    },
    status: {
      CANCELED: 'Abgebrochen',
      FAILED: 'Fehler',
      IN_PROGRESS: 'In Arbeit',
      QUEUED: 'In Warteschlange',
      SUCCEEDED: 'Erfolg',
      TIMED_OUT: 'Timeout',
      UNKNOWN: 'Unbekannt',
    },
    optionNames: {
      autostart: 'Zeitwahl',
      devicedisabled: 'Gerät deaktivieren',
      deviceshutdown: 'Gerät ausschalten',
      forced: 'Erzwungen',
      hard: 'Hart',
      'immediate-restart': 'Sofort',
      'no-autostart': 'Kein Autostart',
      off: 'Aus',
      on: 'An',
      soft: 'Normal',
    },
    parameters: {
      'test-beverage': {
        amount: 'Anzahl an Getränken',
      },
      trash: {
        device: 'Gerät',
      },
      'check-device': {
        device: 'Das zu prüfende Gerät',
      },
      'restart-device': {
        device: 'Das Gerät, das neugestartet werden soll',
      },
      'deactivate-device': {
        device: 'Das zu deaktivierende Gerät',
      },
      'robot-test': {
        includeForTest: 'Diese Bewegungen sollen getestet werden',
      },
      'set-start': {
        rebootTime: 'Startzeit der Kaffeebar',
      },
      shell: {
        command: 'Auszuführender Befehl',
      },
      message: {
        message: 'Welche Nachricht soll verschickt werden?',
      },
      'robot-command': {
        command: 'Auszuführender Befehl',
      },
      'set-server-state': {
        newstate: 'Neuer Serverstate',
      },
      'end-maintenance': {
        rebootTime: 'Startzeit der Kaffeebar',
        leftPrinterCartridge: 'Linke Druckerpatrone gewechselt',
        rightPrinterCartridge: 'Rechte Druckerpatrone gewechselt',
      },
    },
    steps: {
      'block-orders': {
        allOrdersFinished: 'Alle Bestellungen abgeschlossen',
        failed: 'Bestellungen konnten nicht gesperrt werden',
        ordersBlocked: 'Bestellungen gesperrt',
        registered: 'Job registriert',
      },
      'check-device': {
        deviceTestFailed: 'Das Gerät ist nicht betriebsbereit',
        deviceTestedSuccessfully: 'Gerät erfolgreich getestet',
        noTestPossible: 'Gerät konnte nicht getestet werden',
        started: 'Gerätetest gestartet',
      },
      common: {
        alreadyInProgress:
          'Es wurde versucht einen Befehl auszuführen, der sich bereits in Ausführung befindet. Da der Zustand unbekannt ist, wird der Befehl abgebrochen.',
        failed: 'Job konnte nicht ausgeführt werden',
        optionNotSet: 'Der Job schlägt fehl, weil eine obligatorische Option fehlt',
        success: 'Auftrag erfolgreich ausgeführt',
        unknown: 'Auftrag aus unbekannten Gründen fehlgeschlagen',
        unknownOperation: 'Der Job schlägt fehl, weil er eine unbekannte Operation hat',
        wrongState:
          'Der Job schlägt fehl, weil er eine Zustandsbedingung hat, die vom aktuellen Serverzustand nicht erfüllt wird',
      },
      'deactivate-device': {
        deactivedPermanently: 'Gerät dauerhaft deaktiviert',
        deactivedTemporarily: 'Gerät vorübergehend deaktiviert',
        notPossible: 'Gerät konnte nicht deaktiviert werden',
        sentRequest: 'Deaktivierungsanfrage gesendet',
      },
      'disable-notifications': 'Telegramm ist jetzt stumm',
      'enable-notifications': 'Telegramm einschalten',
      endMaintenance: {
        autostartFinished: 'Autostart abgeschlossen',
        autostartSet: 'Autostart gesetzt',
        autostarted: 'Autostart begonnen',
        failed: 'Wartung konnte nicht beendet werden',
        registered: 'Befehl zum Beenden der Wartung registriert',
        success: 'Wartung erfolgreich abgeschlossen',
      },
      init: {
        allOrdersFinished: 'Alle Bestellungen abgeschlossen',
        alreadyCorrectState: 'Init nicht notwendig',
        failed: 'Initialisierung fehlgeschlagen',
        initStarted: 'Initialisierungsbefehl gesendet',
        registered: 'Job registriert',
        serverShutdown: 'Herunterfahren der Anwendung',
        success: 'Initialisierung erfolgreich',
        waitOrdersFinished: 'Warte, bis Bestellungen abgeschlossen sind',
      },
      message: {
        messageFailed: 'Senden der Nachricht fehlgeschlagen',
        sentMessage: 'Nachricht gesendet',
      },
      pause: {
        allOrdersFinished: 'Alle Bestellungen abgeschlossen',
        failed: 'Pause fehlgeschlagen',
        incorrectState: 'Pause nicht möglich, da der Server nicht im richtigen Zustand ist',
        success: 'Betrieb pausiert',
        waitOrdersFinished: 'Warte, bis Bestellungen abgeschlossen sind',
        wrongStateResult: 'Pause wurde angefordert, aber der Betrieb konnte nicht angehalten werden',
      },
      reboot: {
        allOrdersFinished: 'Alle Bestellungen abgeschlossen',
        failed: 'Neustart fehlgeschlagen',
        rebootSuccessful: 'Server wurde erfolgreich neugestartet',
        rebooting: 'Server wird neugestartet',
        registered: 'Neustart registriert',
        scheduled: 'Server wird in einer Minute neugestartet',
        success: 'Neustart abgeschlossen und Anwendung gestartet',
        waitOrdersFinished: 'Warte, bis Bestellungen abgeschlossen sind',
        waitUntilPossible: 'Warte bis Neustart durchgeführt werden kann',
      },
      'recover-robot': {
        connecting: 'Verbindung zur Datenbank',
        failed: 'Verbindung zur Datenbank konnte nicht hergestellt werden',
        keysRemoved: 'Datenbank bereinigt',
        removingKeys: 'Starte Bereinigung der Datenbank',
        success: 'Robotersperre aufgehoben',
      },
      'reload-config': {
        allOrdersFinished: 'Alle Bestellungen abgeschlossen',
        initStarted: 'Initialisierung gestartet',
        initialized: 'Anwendung initialisiert',
        notPossible: 'Konfig konnte nicht neu geladen werden',
        registered: 'Job registriert',
        serverShutdown: 'Herunterfahren der Anwendung',
        serverStarted: 'Anwendung wieder gestartet',
        waitOrdersFinished: 'Warte, bis Bestellungen abgeschlossen sind',
      },
      'remove-orders': {
        connecting: 'Verbindung zur Datenbank',
        failed: 'Bestellungen konnten nicht entfernt werden',
        ordersRemoved: 'Alle Bestellungen wurden entfernt',
        removingKeys: 'Starte Bereinigung der Datenbank',
      },
      'remove-start': {
        failed: 'Autostart konnte nicht entfernt werden',
        startRemoved: 'Autostart entfernt',
      },
      'reset-redis': {
        connecting: 'Verbindung zur Datenbank',
        failed: 'Datenbank konnte nicht bereinigt werden',
        keysRemoved: 'Datenbank bereinigt',
        removingKeys: 'Entfernen von Schlüsseln aus der Datenbank',
        settingCleanShutdown: 'Flag für sauberes Herunterfahren setzen',
        success: 'Datenbank bereinigt',
      },
      'restart-device': {
        notPossible: 'Gerät konnte nicht neu gestartet werden',
        restarted: 'Gerät neu gestartet',
        sentRequest: 'Befehl zum Neustart gesendet',
      },
      'robot-command': {
        commandFailed: 'Befehl fehlgeschlagen',
        notPossible: 'Befehl konnte nicht gesendet werden',
        sentCommand: 'Befehl gesendet',
      },
      'robot-test': 'Robotertest durchführen',
      'set-server-state': {
        notPossible: 'Status konnte nicht geändert werden',
        sentRequest: 'Statusänderungsanforderung gesendet',
        stateChanged: 'Zustand geändert',
      },
      'set-start': {
        failed: 'Autostart konnte nicht gesetzt werden',
        startSet: 'Autostart gesetzt',
      },
      shell: 'Shell-Befehl ausführen',
      shutdown: {
        allOrdersFinished: 'Alle Bestellungen abgeschlossen',
        deletingOldOrders: 'Löschen aller laufenden Aufträge',
        failed: 'Herunterfahren fehlgeschlagen',
        pauseBeforeShutdown: 'Pause vor dem Herunterfahren',
        registered: 'Herunterfahren registriert',
        shuttingDown: 'Anwendung herunterfahren',
        success: 'Herunterfahren erfolgreich',
        waitOrdersFinished: 'Warte, bis Bestellungen abgeschlossen sind',
      },
      start: {
        allOrdersFinished: 'Alle Bestellungen abgeschlossen',
        failed: 'Anwendung konnte nicht gestartet werden',
        registered: 'Start registriert',
        serverShutdown: 'Herunterfahren der Anwendung',
        serverStarted: 'Anwendung gestartet',
        waitOrdersFinished: 'Warte, bis Bestellungen abgeschlossen sind',
      },
      'start-maintenance': {
        allOrdersFinished: 'Alle Bestellungen abgeschlossen',
        doorsOpen: 'Ausgaben geöffnet, Bildschirme und Roboter ausgeschaltet',
        failed: 'Wartungsmodus konnte nicht gestartet werden',
        registered: 'Befehl zum Starten der Wartung registriert',
        robotStop: 'Der Roboter wird angehalten. Box kann geöffnet werden.',
        success: 'Wartungsmodus erfolgreich gestartet',
        waitOrdersFinished: 'Warte, bis Bestellungen abgeschlossen sind',
      },
      'test-beverage': {
        failed: 'Testgetränke konnten nicht bestellt werden',
        success: 'Testgetränke bestellt',
      },
      trash: {
        finished: 'Entsorgungsfahrt abgeschlossen',
        notPossible: 'Entsorgungsfahrt konnte nicht gestartet werden oder war nicht erfolgreich',
        started: 'Entsorgungsfahrt gestartet',
      },
      'unblock-orders': {
        failed: 'Bestellungen konnten nicht entsperrt werden',
        ordersUnblocked: 'Bestellungen entsperrt',
        registered: 'Job registriert',
      },
      unpause: {
        failed: 'Einheit noch in Pause',
        incorrectState: 'Box wurde nicht pausiert',
        success: 'Pause beendet',
      },
      update: {
        allOrdersFinished: 'Alle Bestellungen abgeschlossen',
        downloadFinished: 'Download beendet',
        downloading: 'Update wird heruntergeladen',
        restartedApplications: 'Anwendungen neu gestartet',
        restartingApplications: 'Anwendungen neu starten',
        scheduled: 'Aktualisierung eingeplant',
        serverShutdown: 'Herunterfahren der Anwendung',
        stoppedApplications: 'Gestoppte Anwendungen',
        success: 'Aktualisierung erfolgreich',
        waitForMaintenance: 'Warte bis Wartung beendet wurde',
        waitOrdersFinished: 'Warte, bis Bestellungen abgeschlossen sind',
      },
      'upload-logs': {
        credentials: 'Gültige Anmeldeinformationen zum Hochladen auf S3 erhalten',
        filesUploaded: 'Protokolldateien auf S3 hochgeladen',
        filesWritten: 'Protokolldateien auf die Festplatte geschrieben',
        registered: 'Job zum Hochladen von Protokollen registriert',
      },
    },
  },
};
export default de;
