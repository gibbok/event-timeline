import { Events } from "@/types/api";

export const eventsData: Events = [
    {
        "job_event_id": "5e884a00-5840-4840-9aa7-ed270933941f",
        "job_card_id": "ce6bff8d-eb09-4208-9405-c2594f74ccb0",
        "job_event_type": "started",
        "job_event_user": "Thad Cormier",
        "job_event_metadata": {
            "device": {
                "station": {
                    "zone_name": "Bench - Panels",
                    "factory_name": "Urban Splash House Factory",
                    "partner_name": "Urban Splash",
                    "station_name": "Bay 1"
                },
                "device_id": "d85922780c45ad4eadc0919e75f964085db7649b2dcb7fd78b76f8d65ce09cd3"
            },
            "job_headcount": 2,
            "checked_pre_flight_checks": [
                {
                    "images": [
                        {
                            "path": "operations/c70c8592-3c5e-4203-af7c-cb74300a4dc1/pre_flight_checks/1898c571-56e2-4d04-97ca-fc753b2bdc86.png",
                            "title": "PFC1.png"
                        }
                    ],
                    "content": "For this task, you'll need these tools...",
                    "category": "Tools / Jigs"
                },
                {
                    "images": [
                        {
                            "path": "operations/c70c8592-3c5e-4203-af7c-cb74300a4dc1/pre_flight_checks/30d5eb54-9219-404a-8108-8b2d2b6ce3d2.png",
                            "title": "PFC2.png"
                        }
                    ],
                    "content": "You'll also need...",
                    "category": "People, PPE & Training"
                }
            ]
        },
        "job_event_occurrence": "2022-11-23 17:30:59.179995+00"
    },
    {
        "job_event_id": "9d0f4e98-11d3-4d02-b361-9cd3ef8b49d9",
        "job_card_id": "ce6bff8d-eb09-4208-9405-c2594f74ccb0",
        "job_event_type": "on_break",
        "job_event_user": "Thad Cormier",
        "job_event_metadata": {
            "device": {
                "station": {
                    "zone_name": "Bench - Panels",
                    "factory_name": "Urban Splash House Factory",
                    "partner_name": "Urban Splash",
                    "station_name": "Bay 1"
                },
                "device_id": "d85922780c45ad4eadc0919e75f964085db7649b2dcb7fd78b76f8d65ce09cd3"
            }
        },
        "job_event_occurrence": "2022-11-23 17:31:04.523876+00"
    },
    {
        "job_event_id": "1666659d-7e5c-43e6-bbc7-c52f8a9a779e",
        "job_card_id": "ce6bff8d-eb09-4208-9405-c2594f74ccb0",
        "job_event_type": "in_progress",
        "job_event_user": "Thad Cormier",
        "job_event_metadata": {
            "device": {
                "station": {
                    "zone_name": "Bench - Panels",
                    "factory_name": "Urban Splash House Factory",
                    "partner_name": "Urban Splash",
                    "station_name": "Bay 1"
                },
                "device_id": "d85922780c45ad4eadc0919e75f964085db7649b2dcb7fd78b76f8d65ce09cd3"
            }
        },
        "job_event_occurrence": "2022-11-23 17:31:10.523076+00"
    },
    {
        "job_event_id": "d270c3b6-96c3-43d1-ac85-7c512de0be34",
        "job_card_id": "ce6bff8d-eb09-4208-9405-c2594f74ccb0",
        "job_event_type": "downtime",
        "job_event_user": "Thad Cormier",
        "job_event_metadata": {
            "device": {
                "station": {
                    "zone_name": "Bench - Panels",
                    "factory_name": "Urban Splash House Factory",
                    "partner_name": "Urban Splash",
                    "station_name": "Bay 1"
                },
                "device_id": "d85922780c45ad4eadc0919e75f964085db7649b2dcb7fd78b76f8d65ce09cd3"
            }
        },
        "job_event_occurrence": "2022-11-23 17:31:15.617801+00"
    },
    {
        "job_event_id": "8a6ac826-ed60-45cd-8011-004ca86b5daf",
        "job_card_id": "ce6bff8d-eb09-4208-9405-c2594f74ccb0",
        "job_event_type": "submit_downtime_report_causes",
        "job_event_user": "Thad Cormier",
        "job_event_metadata": {
            "causes": {
                "Design": [
                    "Drawing Issues"
                ]
            },
            "device": {
                "station": {
                    "zone_name": "Bench - Panels",
                    "factory_name": "Urban Splash House Factory",
                    "partner_name": "Urban Splash",
                    "station_name": "Bay 1"
                },
                "device_id": "d85922780c45ad4eadc0919e75f964085db7649b2dcb7fd78b76f8d65ce09cd3"
            }
        },
        "job_event_occurrence": "2022-11-23 17:31:20.127669+00"
    },
    {
        "job_event_id": "ad29fb9c-d345-431d-9ae6-299ba7f4bcb6",
        "job_card_id": "ce6bff8d-eb09-4208-9405-c2594f74ccb0",
        "job_event_type": "submit_downtime_report_causes",
        "job_event_user": "Thad Cormier",
        "job_event_metadata": {
            "causes": {
                "Design": [
                    "Drawing Issues"
                ],
                "Rework": [
                    "Drawing not followed"
                ]
            },
            "device": {
                "station": {
                    "zone_name": "Bench - Panels",
                    "factory_name": "Urban Splash House Factory",
                    "partner_name": "Urban Splash",
                    "station_name": "Bay 1"
                },
                "device_id": "d85922780c45ad4eadc0919e75f964085db7649b2dcb7fd78b76f8d65ce09cd3"
            }
        },
        "job_event_occurrence": "2022-11-23 17:31:23.379595+00"
    },
    {
        "job_event_id": "68240b61-09d3-4797-9052-7a3f4d3b5223",
        "job_card_id": "ce6bff8d-eb09-4208-9405-c2594f74ccb0",
        "job_event_type": "headcount_changed",
        "job_event_user": "Thad Cormier",
        "job_event_metadata": {
            "job_headcount": 1
        },
        "job_event_occurrence": "2022-11-23 17:33:42.851223+00"
    },
    {
        "job_event_id": "87874db1-f5be-4a49-be2f-409c5c3ac4d6",
        "job_card_id": "ce6bff8d-eb09-4208-9405-c2594f74ccb0",
        "job_event_type": "headcount_changed",
        "job_event_user": "Thad Cormier",
        "job_event_metadata": {
            "job_headcount": 4
        },
        "job_event_occurrence": "2022-11-23 17:33:53.638472+00"
    },
    {
        "job_event_id": "e6c2c29d-156d-49ca-9c55-59c6ff464892",
        "job_card_id": "ce6bff8d-eb09-4208-9405-c2594f74ccb0",
        "job_event_type": "in_progress",
        "job_event_user": "Thad Cormier",
        "job_event_metadata": {
            "device": {
                "station": {
                    "zone_name": "Bench - Panels",
                    "factory_name": "Urban Splash House Factory",
                    "partner_name": "Urban Splash",
                    "station_name": "Bay 1"
                },
                "device_id": "d85922780c45ad4eadc0919e75f964085db7649b2dcb7fd78b76f8d65ce09cd3"
            }
        },
        "job_event_occurrence": "2022-11-23 17:40:46.800652+00"
    },
    {
        "job_event_id": "be317a24-09b8-4b5b-997b-a8542a1738a2",
        "job_card_id": "ce6bff8d-eb09-4208-9405-c2594f74ccb0",
        "job_event_type": "downtime_report_submitted",
        "job_event_user": "Thad Cormier",
        "job_event_metadata": {
            "note": "99",
            "device": {
                "station": {
                    "zone_name": "Bench - Panels",
                    "factory_name": "Urban Splash House Factory",
                    "partner_name": "Urban Splash",
                    "station_name": "Bay 1"
                },
                "device_id": "d85922780c45ad4eadc0919e75f964085db7649b2dcb7fd78b76f8d65ce09cd3"
            }
        },
        "job_event_occurrence": "2022-11-23 17:40:49.193277+00"
    },
    {
        "job_event_id": "208782fc-8b3b-4762-88e3-ca18b13e4444",
        "job_card_id": "ce6bff8d-eb09-4208-9405-c2594f74ccb0",
        "job_event_type": "on_break",
        "job_event_user": "Thad Cormier",
        "job_event_metadata": {
            "device": {
                "station": {
                    "zone_name": "Bench - Panels",
                    "factory_name": "Urban Splash House Factory",
                    "partner_name": "Urban Splash",
                    "station_name": "Bay 1"
                },
                "device_id": "d85922780c45ad4eadc0919e75f964085db7649b2dcb7fd78b76f8d65ce09cd3"
            }
        },
        "job_event_occurrence": "2022-11-23 17:40:55.572262+00"
    },
    {
        "job_event_id": "427e4d0d-12a4-40ce-902f-6bf330623906",
        "job_card_id": "ce6bff8d-eb09-4208-9405-c2594f74ccb0",
        "job_event_type": "clocked_out",
        "job_event_user": "Thad Cormier",
        "job_event_metadata": {
            "device": {
                "station": {
                    "zone_name": "Bench - Panels",
                    "factory_name": "Urban Splash House Factory",
                    "partner_name": "Urban Splash",
                    "station_name": "Bay 1"
                },
                "device_id": "d85922780c45ad4eadc0919e75f964085db7649b2dcb7fd78b76f8d65ce09cd3"
            }
        },
        "job_event_occurrence": "2022-11-23 17:41:01.008387+00"
    },
    {
        "job_event_id": "56e4ab73-27a5-4eba-be87-c8d99f1fdbe0",
        "job_card_id": "ce6bff8d-eb09-4208-9405-c2594f74ccb0",
        "job_event_type": "in_progress",
        "job_event_user": "Thad Cormier",
        "job_event_metadata": {
            "device": {
                "station": {
                    "zone_name": "Bench - Panels",
                    "factory_name": "Urban Splash House Factory",
                    "partner_name": "Urban Splash",
                    "station_name": "Bay 1"
                },
                "device_id": "d85922780c45ad4eadc0919e75f964085db7649b2dcb7fd78b76f8d65ce09cd3"
            }
        },
        "job_event_occurrence": "2022-11-23 17:41:04.983673+00"
    },
    {
        "job_event_id": "b41034ee-668e-429f-8cc1-01a75a7bc86d",
        "job_card_id": "ce6bff8d-eb09-4208-9405-c2594f74ccb0",
        "job_event_type": "downtime",
        "job_event_user": "Thad Cormier",
        "job_event_metadata": {
            "device": {
                "station": {
                    "zone_name": "Bench - Panels",
                    "factory_name": "Urban Splash House Factory",
                    "partner_name": "Urban Splash",
                    "station_name": "Bay 1"
                },
                "device_id": "d85922780c45ad4eadc0919e75f964085db7649b2dcb7fd78b76f8d65ce09cd3"
            }
        },
        "job_event_occurrence": "2022-11-23 17:41:07.944163+00"
    },
    {
        "job_event_id": "0f128978-4c91-40d3-8c4d-06f2a806439b",
        "job_card_id": "ce6bff8d-eb09-4208-9405-c2594f74ccb0",
        "job_event_type": "submit_downtime_report_causes",
        "job_event_user": "Thad Cormier",
        "job_event_metadata": {
            "causes": {
                "Design": [
                    "Coordination",
                    "Drawing Issues"
                ]
            },
            "device": {
                "station": {
                    "zone_name": "Bench - Panels",
                    "factory_name": "Urban Splash House Factory",
                    "partner_name": "Urban Splash",
                    "station_name": "Bay 1"
                },
                "device_id": "d85922780c45ad4eadc0919e75f964085db7649b2dcb7fd78b76f8d65ce09cd3"
            }
        },
        "job_event_occurrence": "2022-11-23 17:41:11.311781+00"
    },
    {
        "job_event_id": "dfe5d80e-3fc9-4c85-a885-c0d997d6b49d",
        "job_card_id": "ce6bff8d-eb09-4208-9405-c2594f74ccb0",
        "job_event_type": "in_progress",
        "job_event_user": "Thad Cormier",
        "job_event_metadata": {
            "device": {
                "station": {
                    "zone_name": "Bench - Panels",
                    "factory_name": "Urban Splash House Factory",
                    "partner_name": "Urban Splash",
                    "station_name": "Bay 1"
                },
                "device_id": "d85922780c45ad4eadc0919e75f964085db7649b2dcb7fd78b76f8d65ce09cd3"
            }
        },
        "job_event_occurrence": "2022-11-23 17:42:49.03318+00"
    },
    {
        "job_event_id": "1d21eec9-b7c9-4023-b697-dab2db5bad6e",
        "job_card_id": "ce6bff8d-eb09-4208-9405-c2594f74ccb0",
        "job_event_type": "downtime_report_submitted",
        "job_event_user": "Thad Cormier",
        "job_event_metadata": {
            "note": "99",
            "device": {
                "station": {
                    "zone_name": "Bench - Panels",
                    "factory_name": "Urban Splash House Factory",
                    "partner_name": "Urban Splash",
                    "station_name": "Bay 1"
                },
                "device_id": "d85922780c45ad4eadc0919e75f964085db7649b2dcb7fd78b76f8d65ce09cd3"
            }
        },
        "job_event_occurrence": "2022-11-23 17:42:51.176651+00"
    },
    {
        "job_event_id": "58ce9443-4389-464a-8258-74c663c0eb16",
        "job_card_id": "ce6bff8d-eb09-4208-9405-c2594f74ccb0",
        "job_event_type": "headcount_changed",
        "job_event_user": "Thad Cormier",
        "job_event_metadata": {
            "job_headcount": 4
        },
        "job_event_occurrence": "2022-11-23 17:43:02.574084+00"
    },
    {
        "job_event_id": "69afaa10-7a07-44a5-b623-554dad59f6f1",
        "job_card_id": "ce6bff8d-eb09-4208-9405-c2594f74ccb0",
        "job_event_type": "in_process_check_changed",
        "job_event_user": "Thad Cormier",
        "job_event_metadata": {
            "device": {
                "station": {
                    "zone_name": "Bench - Panels",
                    "factory_name": "Urban Splash House Factory",
                    "partner_name": "Urban Splash",
                    "station_name": "Bay 1"
                },
                "device_id": "d85922780c45ad4eadc0919e75f964085db7649b2dcb7fd78b76f8d65ce09cd3"
            },
            "in_process_check": {
                "name": "",
                "type": "standard_work_instruction",
                "order": 0,
                "images": [
                    {
                        "path": "operations/c70c8592-3c5e-4203-af7c-cb74300a4dc1/standard_work_instructions/ada952b1-1789-4c0a-9cb4-a55a1971319f.png",
                        "title": "Assemble all the studs"
                    }
                ],
                "addressed_on": "2022-11-23T17:43:23.158537",
                "check_status": "pass"
            }
        },
        "job_event_occurrence": "2022-11-23 17:43:23.158537+00"
    },
    {
        "job_event_id": "fe1cd8cd-eb42-49e8-92a5-80996e32e345",
        "job_card_id": "ce6bff8d-eb09-4208-9405-c2594f74ccb0",
        "job_event_type": "in_process_check_changed",
        "job_event_user": "Thad Cormier",
        "job_event_metadata": {
            "device": {
                "station": {
                    "zone_name": "Bench - Panels",
                    "factory_name": "Urban Splash House Factory",
                    "partner_name": "Urban Splash",
                    "station_name": "Bay 1"
                },
                "device_id": "d85922780c45ad4eadc0919e75f964085db7649b2dcb7fd78b76f8d65ce09cd3"
            },
            "in_process_check": {
                "name": "",
                "type": "standard_work_instruction",
                "order": 1,
                "images": [
                    {
                        "path": "operations/c70c8592-3c5e-4203-af7c-cb74300a4dc1/standard_work_instructions/43080763-5f78-4f67-9767-d915f2b86999.png",
                        "title": "Measure squareness"
                    }
                ],
                "addressed_on": "2022-11-23T17:43:28.643534",
                "check_status": "pass"
            }
        },
        "job_event_occurrence": "2022-11-23 17:43:28.643534+00"
    },
    {
        "job_event_id": "058c7edc-de1e-4d62-bfbd-95e66c0dc7ff",
        "job_card_id": "ce6bff8d-eb09-4208-9405-c2594f74ccb0",
        "job_event_type": "in_process_check_changed",
        "job_event_user": "Thad Cormier",
        "job_event_metadata": {
            "device": {
                "station": {
                    "zone_name": "Bench - Panels",
                    "factory_name": "Urban Splash House Factory",
                    "partner_name": "Urban Splash",
                    "station_name": "Bay 1"
                },
                "device_id": "d85922780c45ad4eadc0919e75f964085db7649b2dcb7fd78b76f8d65ce09cd3"
            },
            "in_process_check": {
                "name": "",
                "type": "standard_work_instruction",
                "order": 2,
                "images": [
                    {
                        "path": "operations/c70c8592-3c5e-4203-af7c-cb74300a4dc1/standard_work_instructions/f1a94ddb-e456-4846-ae37-9d3ad90a9010.png",
                        "title": "Install vapour barrier"
                    }
                ],
                "addressed_on": "2022-11-23T17:43:41.745791",
                "check_status": "pass"
            }
        },
        "job_event_occurrence": "2022-11-23 17:43:41.745791+00"
    },
    {
        "job_event_id": "6b694a30-2e72-4626-9ea5-9e0e7eefb662",
        "job_card_id": "ce6bff8d-eb09-4208-9405-c2594f74ccb0",
        "job_event_type": "in_process_check_changed",
        "job_event_user": "Thad Cormier",
        "job_event_metadata": {
            "device": {
                "station": {
                    "zone_name": "Bench - Panels",
                    "factory_name": "Urban Splash House Factory",
                    "partner_name": "Urban Splash",
                    "station_name": "Bay 1"
                },
                "device_id": "d85922780c45ad4eadc0919e75f964085db7649b2dcb7fd78b76f8d65ce09cd3"
            },
            "in_process_check": {
                "name": "Check floor diagonals",
                "type": "quality_check",
                "check": "visual",
                "order": 3,
                "images": [],
                "content": "Ensure the floor is square and in line with drawing requirements",
                "addressed_on": "2022-11-23T17:45:00.960674",
                "check_status": "pass"
            }
        },
        "job_event_occurrence": "2022-11-23 17:45:00.960674+00"
    },
    {
        "job_event_id": "9fdd6228-7694-4ad7-944e-0158ac292177",
        "job_card_id": "ce6bff8d-eb09-4208-9405-c2594f74ccb0",
        "job_event_type": "in_process_check_changed",
        "job_event_user": "Thad Cormier",
        "job_event_metadata": {
            "device": {
                "station": {
                    "zone_name": "Bench - Panels",
                    "factory_name": "Urban Splash House Factory",
                    "partner_name": "Urban Splash",
                    "station_name": "Bay 1"
                },
                "device_id": "d85922780c45ad4eadc0919e75f964085db7649b2dcb7fd78b76f8d65ce09cd3"
            },
            "in_process_check": {
                "name": "Check vapour barrier",
                "type": "quality_check",
                "check": "visual",
                "order": 4,
                "images": [],
                "content": "Ensure the vapour barrier has been installed as per drawing requirements",
                "addressed_on": "2022-11-23T17:45:17.294235",
                "check_status": "pass"
            }
        },
        "job_event_occurrence": "2022-11-23 17:45:17.294235+00"
    },
    {
        "job_event_id": "d64c1cd5-9134-4913-9e72-3b5fe77cd408",
        "job_card_id": "ce6bff8d-eb09-4208-9405-c2594f74ccb0",
        "job_event_type": "canceled",
        "job_event_user": "Thad Cormier",
        "job_event_metadata": {
            "device": {
                "station": {
                    "zone_name": "Bench - Panels",
                    "factory_name": "Urban Splash House Factory",
                    "partner_name": "Urban Splash",
                    "station_name": "Bay 1"
                },
                "device_id": "d85922780c45ad4eadc0919e75f964085db7649b2dcb7fd78b76f8d65ce09cd3"
            }
        },
        "job_event_occurrence": "2022-11-25 14:38:33.069967+00"
    },
    {
        "job_event_id": "5d4a0bb3-552e-446b-9f6b-f00a88d8a782",
        "job_card_id": "ce6bff8d-eb09-4208-9405-c2594f74ccb0",
        "job_event_type": "started",
        "job_event_user": "Thad Cormier",
        "job_event_metadata": {
            "device": {
                "station": {
                    "zone_name": "Bench - Panels",
                    "factory_name": "Urban Splash House Factory",
                    "partner_name": "Urban Splash",
                    "station_name": "Bay 1"
                },
                "device_id": "d85922780c45ad4eadc0919e75f964085db7649b2dcb7fd78b76f8d65ce09cd3"
            },
            "job_headcount": 1,
            "checked_pre_flight_checks": [
                {
                    "images": [
                        {
                            "path": "operations/c70c8592-3c5e-4203-af7c-cb74300a4dc1/pre_flight_checks/1898c571-56e2-4d04-97ca-fc753b2bdc86.png",
                            "title": "PFC1.png"
                        }
                    ],
                    "content": "For this task, you'll need these tools...",
                    "category": "Tools / Jigs"
                },
                {
                    "images": [
                        {
                            "path": "operations/c70c8592-3c5e-4203-af7c-cb74300a4dc1/pre_flight_checks/30d5eb54-9219-404a-8108-8b2d2b6ce3d2.png",
                            "title": "PFC2.png"
                        }
                    ],
                    "content": "You'll also need...",
                    "category": "People, PPE & Training"
                }
            ]
        },
        "job_event_occurrence": "2022-11-25 14:39:19.751762+00"
    },
    {
        "job_event_id": "437293ac-e12c-439a-8511-007da10900c4",
        "job_card_id": "ce6bff8d-eb09-4208-9405-c2594f74ccb0",
        "job_event_type": "canceled",
        "job_event_user": "Thad Cormier",
        "job_event_metadata": {
            "device": {
                "station": {
                    "zone_name": "Bench - Panels",
                    "factory_name": "Urban Splash House Factory",
                    "partner_name": "Urban Splash",
                    "station_name": "Bay 1"
                },
                "device_id": "d85922780c45ad4eadc0919e75f964085db7649b2dcb7fd78b76f8d65ce09cd3"
            }
        },
        "job_event_occurrence": "2022-11-25 14:39:25.149178+00"
    }
]