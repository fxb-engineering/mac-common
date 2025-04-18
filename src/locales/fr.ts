import { Translation } from './en';

const fr: Translation = {
  deviceStates: {
    Unknown: 'Inconnu',
    Available: 'Disponible',
    AvailableAfterRestart: 'redémarrage nécessaire',
    Disabled: 'Handicapé',
    Error: 'Perturbation',
    JobDone: 'Achevé',
    Maintenance: 'maintenance',
    ProcessingJob: 'Employé',
    ShutDown: 'Hors de',
  },
  customerFeedback: {
    inProduction: 'En cours de traitement',
    startsSoon: 'Démarrage imminent',
    gate: 'Sortie',
    ice: 'Glace',
    brew: 'Café',
    print: 'Imprimer',
    ready: 'Prêt',
    appstate: 'Votre comptoir MyAppCafé sera à nouveau disponible sous peu.',
    ordersblocked: "Votre bar MyAppCafé n'accepte pas actuellement de nouvelles commandes.",
  },
  deviceTypes: {
    CoffeeMachine_WMF9000s_one: 'cafetière',
    CoffeeMachine_WMF9000s_other: 'machines à café',
    CupHolder_one: 'porte-gobelet',
    CupHolder_other: 'porte-gobelet',
    DisplayDevice_one: 'filtrer',
    DisplayDevice_other: 'affichage',
    Gate_one: 'production',
    Gate_other: 'dépense',
    PaymentTerminalAdyen_one: 'lecteur de carte de crédit',
    PaymentTerminalAdyen_other: 'lecteurs de cartes de crédit',
    PaymentTerminalCastle_one: 'lecteur de carte de crédit',
    PaymentTerminalCastle_other: 'lecteurs de cartes de crédit',
    PaymentTerminalDummy: 'Lecteur de carte de crédit à espace réservé',
    RippleMakerMkII_one: 'imprimante alimentaire',
    RippleMakerMkII_other: 'imprimante alimentaire',
    Robot_one: 'robot',
    Robot_other: 'robot',
    Scanner_one: 'scanner',
    Scanner_other: 'scanner',
  },
  goods: {
    bean1: 'haricot1',
    bean2: 'haricot2',
    category: 'Catégorie',
    powder: 'Chocolat',
    cup: 'Une tasse',
    extraStrong: 'extra fort',
    id: 'IDENTIFIANT',
    milk: 'Le Lait',
    milk1: 'lait1',
    milk2: 'lait2',
    name: 'Nom de famille',
    noSyrup: 'pas de sirop',
    price: 'Prix',
    print: 'Imprimer',
    sirup1: 'sirop1',
    sirup2: 'sirop2',
    sirup3: 'sirop3',
    sirup4: 'sirop4',
    size: 'Taille',
    syrup: 'sirop',
  },
  serverStates: {
    FatalError: 'Perturbation',
    Maintenance: 'maintenance',
    NeverInitialized: 'Pas commencé',
    Okay: "D'ACCORD",
    Paused: 'Casser',
    Pausing: 'Arrêt...',
    Restarting: 'Redémarrages',
    Starting: 'Départ...',
    Update: 'mises à jour',
    Updating: 'mises à jour',
    closed: 'Pas connecté',
    continue: 'Continuer',
    title: 'Statut actuel:',
  },
  jobs: {
    cautions: {
      'recover-robot':
        'Une inspection visuelle précise est nécessaire ! \nLe robot se dirige directement vers la position de maintenance. \nAucun objet ne doit se trouver sur le trajet de déplacement.',
      'remove-orders': 'Les commandes qui sont déjà en production ne sont pas affectées.',
      'restart-device':
        "Avec certains appareils, il est nécessaire pour un redémarrage que la box s'arrête brièvement.",
      shutdown:
        "Toutes les commandes suivantes, à l'exception de \"Démarrage\" et \"Mise à jour\", échoueront. \n'Non connecté' s'affiche sur l'écran de maintenance.",
      trash: "Assurez-vous que la table à gobelets de l'appareil sélectionné est en position basse.",
    },
    descriptions: {
      'block-orders':
        'Toutes les commandes ultérieures seront bloquées. \nLes commandes déjà passées seront toujours traitées.',
      'check-device':
        "Teste la fonctionnalité d'un appareil. \nEn cas de succès, l'appareil traite à nouveau les commandes.",
      'deactivate-device': "L'appareil ne traitera plus les commandes.",
      'disable-notifications': "Plus aucun message ne sera envoyé jusqu'au prochain démarrage de la boîte.",
      'enable-notifications':
        'Les notifications seront à nouveau envoyées. \nUtile uniquement si les notifications ont été désactivées au préalable.',
      'end-maintenance': 'Mode entretien complet',
      init: 'Démarre le fonctionnement de la boîte.',
      lights: 'Allume ou éteint les lumières et les moniteurs de télévision',
      message: 'Envoie un message à tous les abonnés via le bot MyAppCafé.',
      pause: 'Met la boîte en pause.',
      reboot: 'Redémarre le serveur.',
      'recover-robot':
        "Après l'ouverture de la boîte lors d'un mouvement du robot, le lancement suivant est bloqué car le robot peut se trouver dans une position dangereuse. \nAprès une vérification approfondie, le robot peut être libéré à nouveau avec cette commande.",
      'reload-config':
        "Télécharge la dernière configuration. \nSi la box est déjà en fonctionnement, les modifications ne prendront effet qu'après le prochain redémarrage.",
      'remove-orders': 'Supprime toutes les commandes enregistrées.',
      'remove-start': 'Supprime un démarrage automatique existant.',
      'reset-redis': 'Effectue un arrêt propre dans Redis et supprime les blocages du robot.',
      'restart-device': 'Redémarre un appareil.',
      'robot-command': 'Exécute une seule commande de robot.',
      'robot-test': 'Teste toutes les commandes du robot.',
      'set-server-state': "Modifie l'état du serveur sans les processus autrement requis pour cela.",
      'set-start':
        "Réinitialise l'heure du prochain démarrage automatique. \nSi un démarrage automatique est configuré, il sera écrasé.",
      shell: 'Exécute une commande shell sur la machine hôte.',
      shutdown: "Arrête l'application de contrôle.",
      start:
        "Démarre l'application. \nCela ne signifie PAS que le boîtier est prêt à l'emploi, mais simplement que l'application de contrôle est démarrée. \nIl existe une commande distincte pour démarrer la boîte.",
      'start-maintenance': 'Démarrage du mode maintenance',
      'test-beverage':
        'Produit une boisson aléatoire. \nSi possible, la boisson test est commandée avec une impression.',
      trash: "Effectue une collecte d'élimination avec le robot.",
      'unblock-orders':
        'Déverrouille le blocage des nouvelles commandes (uniquement si elles ont été précédemment bloquées avec *Bloquer les commandes*).',
      unpause: 'Termine immédiatement la pause.',
      update: "Télécharge la dernière version de l'application de contrôle.",
      'upload-logs': 'Télécharge les journaux de myappcafecontrol.service vers S3.',
    },
    names: {
      'block-orders': 'Commandes en bloc',
      'check-device': "Vérifier l'appareil",
      'deactivate-device': "Planifier l'appareil",
      'disable-notifications': 'Télégramme muet',
      'enable-notifications': 'Activer le télégramme',
      'end-maintenance': 'fin de maintenance',
      init: 'lancement de la boîte',
      lights: 'lumière allumée/éteinte',
      message: 'Envoyer un télégramme',
      pause: 'Casser',
      reboot: 'Redémarrer le serveur',
      'recover-robot': 'lâcher le robot',
      'reload-config': 'mettre à jour la configuration',
      'remove-orders': 'supprimer des commandes',
      'remove-start': "Supprimer l'heure de début (pas de démarrage automatique)",
      'reset-redis': 'Réinitialiser Redis',
      'restart-device': "Redémarrer l'appareil",
      'robot-command': 'Envoyer la commande du robot',
      'robot-test': 'tester des robots',
      'set-server-state': "Définir l'état du serveur",
      'set-start': "Définir l'heure de début",
      shell: 'Exécuter la commande shell',
      shutdown: 'Arrêter le programme',
      start: 'démarrage du programme',
      'start-maintenance': "commencer l'entretien",
      'test-beverage': "boisson d'essai",
      trash: 'disposition',
      'unblock-orders': 'Débloquer une commande',
      unpause: 'fin de pause',
      update: 'mises à jour',
      'upload-logs': 'Téléverser journalctl',
    },
    optionNames: {
      autostart: 'Horaire',
      devicedisabled: "désactiver l'appareil",
      deviceshutdown: "Éteindre l'appareil",
      forced: 'forcé',
      hard: 'Dur',
      'immediate-restart': 'Immédiatement',
      'no-autostart': 'Pas de démarrage automatique',
      off: 'Hors de',
      on: 'Sur',
      soft: 'Ordinaire',
    },
    options: {
      'deactivate-device': {
        devicedisabled:
          "L'appareil sera définitivement désactivé. \n** La réactivation n'est possible qu'après redémarrage de la box. \nSi vous exécutez *Vérifier l'appareil* plus tard, la tâche échouera toujours, mais l'appareil sera planifié à nouveau après le prochain redémarrage.**",
        deviceshutdown:
          "Après la prochaine initialisation, l'appareil est à nouveau pris en compte pour l'exécution de la tâche.",
      },
      'end-maintenance': {
        autostart: 'Il est possible de sélectionner une heure à laquelle le démarrage automatique est effectué',
        'immediate-restart': 'La box redémarrera immédiatement après la fin de la maintenance',
        'no-autostart': "Aucun démarrage automatique n'est programmé. \nLa box doit être démarrée manuellement",
      },
      init: {
        forced:
          "Effectue l'initialisation de tous les appareils et démarre la production. \nSi la box est déjà en cours d'exécution, elle sera réinitialisée quel que soit l'état actuel de l'application. \nTous les appareils sont déconnectés du secteur. \n**Les commandes ouvertes seront supprimées.**",
        hard: "Effectue l'initialisation de tous les appareils et démarre la production. \nSi la boîte a déjà été initialisée, elle le sera à nouveau, mais seulement après que tous les travaux en cours auront été terminés. \nSi les commandes ne sont pas terminées après 10 minutes, la boîte sera quand même réinitialisée. \nLes travaux ouverts sont reproduits une fois la réinitialisation terminée.",
        soft: "Effectue l'initialisation de tous les appareils et démarre la production. \n**Pas de réinitialisation si la box a déjà été initialisée**.",
      },
      lights: {
        off: 'Éteignez les lumières et les écrans de télévision',
        on: 'Allumez les lumières et les écrans de télévision',
      },
      pause: {
        hard: "Arrête l'application immédiatement. \n**Échoue si l'application n'est pas dans un état \"OK\".** La production ne se poursuivra pas tant que vous n'aurez pas mis fin à la pause.",
        soft: "Suspend l'application une fois toutes les tâches en cours d'exécution terminées. \n**Échoue si l'application n'est pas dans un état \"OK\".**",
      },
      reboot: {
        forced: "Redémarre le serveur principal quel que soit l'état actuel de l'application.",
        hard: 'Redémarre le serveur principal une fois les travaux en cours terminés.',
        soft: "Redémarre le serveur principal après la prochaine maintenance ou immédiatement si aucune initialisation n'a encore été effectuée.",
      },
      'reload-config': {
        forced:
          'Un (re)démarrage est effectué immédiatement, après quoi la box utilise la nouvelle configuration. \n**Les commandes ouvertes seront supprimées.**',
        hard: 'Un (re)démarrage sera programmé une fois toutes les commandes en cours terminées. \nLa box utilisera la nouvelle configuration après ce démarrage.',
        soft: 'La configuration sera utilisée **après la prochaine maintenance**.',
      },
      shutdown: {
        forced:
          "Arrête l'application immédiatement, quelles que soient les tâches en cours d'exécution. \nLes commandes ouvertes seront supprimées, mais uniquement si le serveur est en cours d'exécution.",
        hard: "Quitte l'application quelles que soient les tâches en cours d'exécution. \nLes commandes ouvertes sont reproduites après la prochaine initialisation.",
        soft: "Arrête l'application mais attend que toutes les tâches soient terminées. \nSi les travaux ne sont pas terminés après 10 minutes, l'application se fermera quand même. \nLes commandes ouvertes sont reproduites après la prochaine initialisation.",
      },
      start: {
        forced:
          "Démarre l'application. \nSi l'application est déjà en cours d'exécution, elle sera redémarrée quel que soit son état actuel. \nTous les appareils sont déconnectés du secteur. \nLes commandes ouvertes seront supprimées. \n**L'initialisation n'est pas effectuée automatiquement.**",
        hard: "Démarre l'application. \nSi la boîte a été précédemment initialisée, l'application redémarrera, mais seulement après que tous les travaux en cours seront terminés. \nSi les travaux ne sont pas terminés après 10 minutes, l'application redémarrera quand même. \nLes ordres ouverts seront reproduits au prochain démarrage. \n**L'initialisation n'est pas effectuée automatiquement.**",
        soft: "Démarre l'application. \nSi l'application est déjà en cours d'exécution, elle ne sera pas redémarrée.",
      },
      'start-maintenance': {
        hard: 'La maintenance est démarrée immédiatement, quels que soient les ordres en cours.',
        soft: 'La maintenance ne commencera pas tant que toutes les commandes en cours ne seront pas terminées.',
      },
      update: {
        forced:
          "Si l'application est en cours d'exécution, la mise à jour sera effectuée immédiatement, quel que soit l'état actuel de l'appareil.",
        hard: "Si l'application est en cours d'exécution, la mise à jour sera effectuée une fois toutes les tâches en cours terminées.",
        soft: "Si l'application est en cours d'exécution, la mise à jour sera effectuée après la prochaine maintenance.",
      },
    },
    parameters: {
      'check-device': {
        device: 'Quel appareil doit être vérifié ?',
      },
      'deactivate-device': {
        device: 'Quel appareil doit être désactivé ?',
      },
      'end-maintenance': {
        leftPrinterCartridge: "La cartouche d'imprimante gauche a-t-elle été changée ?",
        rebootTime: 'Quand faut-il initialiser la box ?',
        rightPrinterCartridge: "La bonne cartouche d'imprimante a-t-elle été changée ?",
      },
      message: {
        message: 'Entrez le message à envoyer à la boîte.',
      },
      'restart-device': {
        device: 'Quel appareil redémarrer ?',
      },
      'robot-command': {
        command: 'Entrez la commande à envoyer au robot.',
      },
      'robot-test': {
        includeForTest: 'Sélectionnez les séquences que vous souhaitez tester.',
      },
      'set-server-state': {
        newstate: 'Sélectionnez le nouveau statut.',
      },
      'set-start': {
        rebootTime: 'Quand faut-il initialiser la box ?',
      },
      shell: {
        command: 'Entrez la commande à exécuter.',
      },
      'test-beverage': {
        amount: 'Combien de boissons faut-il produire ?',
      },
      trash: {
        device: "Sur quel appareil le voyage d'élimination doit-il être effectué ?",
      },
    },
    status: {
      CANCELED: 'Annulé',
      FAILED: 'erreur',
      IN_PROGRESS: 'En cours',
      QUEUED: 'Dans la queue',
      SUCCEEDED: 'Succès',
      TIMED_OUT: 'Temps libre',
      UNKNOWN: 'inconnue',
    },
    steps: {
      'block-orders': {
        allOrdersFinished: 'Toutes les commandes terminées',
        failed: "Les commandes n'ont pas pu être bloquées",
        ordersBlocked: 'Commandes bloquées',
        registered: 'Emploi enregistré',
      },
      'check-device': {
        deviceTestFailed: "Le test de l'appareil a renvoyé faux",
        deviceTestedSuccessfully: 'Appareil testé avec succès',
        noTestPossible: "L'appareil n'a pas pu être testé",
        started: "Le test de l'appareil a commencé",
      },
      common: {
        registered: 'Job enregistré',
        timeout: 'Temps écoulé',
        cancelled: 'Job annulé',
        alreadyInProgress:
          "Reçu un travail en cours qui ne devrait pas survivre au redémarrage de l'agent, il doit donc avoir échoué auparavant. \nÉchec explicite maintenant",
        failed: "Échec de l'exécution de la tâche",
        optionNotSet: 'La tâche échouera car une option obligatoire est manquante',
        success: 'Tâche exécutée avec succès',
        unknown: 'La tâche a échoué pour des raisons inconnues',
        unknownOperation: 'La tâche échouera car elle a une opération inconnue',
        wrongState:
          "La tâche échouera car elle a une condition d'état qui n'est pas remplie par l'état actuel du serveur",
      },
      'deactivate-device': {
        deactivedPermanently: 'Appareil désactivé définitivement',
        deactivedTemporarily: 'Appareil temporairement désactivé',
        notPossible: "L'appareil n'a pas pu être désactivé",
        sentRequest: 'Demande de désactivation envoyée',
      },
      'disable-notifications': 'Télégramme muet',
      'enable-notifications': 'Réactiver le télégramme',
      endMaintenance: {
        autostartFinished: 'Démarrage automatique terminé',
        autostartSet: 'Ensemble de démarrage automatique',
        autostarted: 'Le démarrage automatique a commencé',
        failed: "La maintenance n'a pas pu être terminée",
        registered: "Commande d'arrêt de maintenance enregistrée",
        success: 'Entretien terminé avec succès',
      },
      init: {
        allOrdersFinished: 'Toutes les commandes terminées',
        alreadyCorrectState: 'Init pas nécessaire',
        failed: "Échec de l'initialisation",
        initStarted: 'Commande de démarrage envoyée',
        registered: 'Initialement enregistré',
        serverShutdown: "Arrêt de l'application",
        success: 'Initialisation réussie',
        waitOrdersFinished: 'En attendant que les commandes soient terminées',
      },
      message: {
        messageFailed: "L'envoi du message a échoué",
        sentMessage: 'Message envoyé',
      },
      pause: {
        allOrdersFinished: 'Toutes les commandes terminées',
        failed: 'Échec de la mise en veille',
        incorrectState: "Pause impossible car le serveur n'est pas dans le bon état",
        success: 'Unité en pause',
        waitOrdersFinished: 'En attendant que les commandes soient terminées',
        wrongStateResult: "Une pause a été demandée, mais l'application n'est pas dans le bon état pour le moment",
      },
      reboot: {
        allOrdersFinished: 'Toutes les commandes terminées',
        failed: 'Le redémarrage a échoué',
        rebootSuccessful: 'Le serveur a redémarré avec succès',
        rebooting: 'Le serveur est redémarré',
        registered: 'redémarrer enregistré',
        scheduled: 'Le serveur va redémarrer dans une minute',
        success: 'Redémarrage terminé et application démarrée',
        waitOrdersFinished: 'Attendez que les commandes soient terminées',
        waitUntilPossible: 'Attendez que le redémarrage puisse être effectué',
      },
      'recover-robot': {
        connecting: 'Connexion à la base de données',
        failed: "La base de données n'a pas pu être déconnectée",
        keysRemoved: 'Clés supprimées',
        removingKeys: 'Suppression des clés de la base de données',
        success: 'Base de données déconnectée et robot récupéré',
      },
      'reload-config': {
        allOrdersFinished: 'Toutes les commandes terminées',
        initStarted: "L'initialisation a commencé",
        initialized: 'Application initialisée',
        notPossible: "La configuration n'a pas pu être rechargée",
        registered: 'Recharger la configuration enregistrée',
        serverShutdown: "Arrêt de l'application",
        serverStarted: 'Candidature lancée',
        waitOrdersFinished: 'En attendant que les commandes soient terminées',
      },
      'remove-orders': {
        connecting: 'Connexion à la base de données',
        failed: "Les commandes n'ont pas pu être supprimées",
        ordersRemoved: 'Toutes les commandes ont été supprimées',
        removingKeys: 'Suppression des clés de la base de données',
      },
      'remove-start': {
        failed: "Le démarrage automatique n'a pas pu être supprimé",
        startRemoved: 'Démarrage automatique supprimé',
      },
      'reset-redis': {
        connecting: 'Connexion à la base de données',
        failed: "La base de données n'a pas pu être déconnectée",
        keysRemoved: 'Clés supprimées',
        removingKeys: 'Suppression des clés de la base de données',
        settingCleanShutdown: "Définition de l'indicateur d'arrêt propre",
        success: 'Base de données déconnectée et robot récupéré',
      },
      'restart-device': {
        notPossible: "L'appareil n'a pas pu être redémarré",
        restarted: 'Appareil redémarré',
        sentRequest: 'Demande de redémarrage envoyée',
      },
      'robot-command': {
        commandFailed: 'Échec de la commande',
        notPossible: "La commande n'a pas pu être envoyée",
        sentCommand: 'Commande envoyée',
      },
      'robot-test': 'Effectuer un test de robot',
      'set-server-state': {
        notPossible: "L'état n'a pas pu être changé",
        sentRequest: "Demande de changement d'état envoyée",
        stateChanged: 'État modifié',
      },
      'set-start': {
        failed: "Le démarrage automatique n'a pas pu être défini",
        startSet: 'Ensemble de démarrage automatique',
      },
      shell: 'Exécuter la commande shell',
      shutdown: {
        allOrdersFinished: 'Toutes les commandes terminées',
        deletingOldOrders: 'Suppression de toutes les commandes en cours',
        failed: "Échec de l'arrêt",
        pauseBeforeShutdown: "Pause avant l'arrêt",
        registered: 'Arrêt enregistré',
        shuttingDown: "Arrêt de l'application",
        success: 'Arrêt réussi',
        waitOrdersFinished: 'En attendant que les commandes soient terminées',
      },
      start: {
        allOrdersFinished: 'Toutes les commandes terminées',
        failed: "L'application n'a pas pu démarrer",
        registered: 'Commencer enregistré',
        serverShutdown: "Arrêt de l'application",
        serverStarted: 'Candidature lancée',
        waitOrdersFinished: 'En attendant que les commandes soient terminées',
      },
      'start-maintenance': {
        allOrdersFinished: 'Toutes les commandes terminées',
        doorsOpen: 'Problèmes ouverts, écrans et robots éteints',
        failed: 'Impossible de démarrer le mode de maintenance',
        registered: 'Démarrer la commande de maintenance enregistrée',
        robotStop: 'Le robot est arrêté. \nLa boîte peut être ouverte.',
        success: 'Le mode maintenance a démarré avec succès',
        waitOrdersFinished: 'Attendez que les commandes soient terminées',
      },
      'test-beverage': {
        failed: "Les boissons de test n'ont pas pu être commandées",
        success: 'Tester les boissons commandées',
      },
      trash: {
        finished: 'Déplacement de la corbeille terminé',
        notPossible: "Le déplacement de la corbeille n'a pas pu démarrer ou n'a pas réussi",
        started: 'Le déménagement de la corbeille a commencé',
      },
      'unblock-orders': {
        failed: "Les commandes n'ont pas pu être débloquées",
        ordersUnblocked: 'Commandes débloquées',
        registered: 'Emploi enregistré',
      },
      unpause: {
        failed: 'Unité toujours en pause',
        incorrectState: "La boîte n'a pas été mise en pause",
        success: 'Pause terminée',
      },
      update: {
        allOrdersFinished: 'Toutes les commandes terminées',
        downloadFinished: 'Téléchargement terminé',
        downloading: 'Téléchargement de la mise à jour',
        restartedApplications: 'Applications redémarrées',
        restartingApplications: 'Redémarrer les applications',
        scheduled: 'Mise à jour planifiée',
        serverShutdown: "Arrêt de l'application",
        stoppedApplications: 'Applications arrêtées',
        success: 'Mise à jour réussie',
        waitForMaintenance: 'Attendre la fin de la maintenance',
        waitOrdersFinished: 'En attendant que les commandes soient terminées',
      },
      'upload-logs': {
        credentials: "Informations d'identification valides reçues pour le téléchargement vers S3",
        filesUploaded: 'Fichiers journaux téléchargés sur S3',
        filesWritten: 'Écrit les fichiers journaux sur le disque',
        registered: 'Tâche de téléchargement de journaux enregistrée',
      },
    },
  },
};
export default fr;
