
export default function data() {

    let myInitialState = {
        themes: [
            {id: 1, name:'Theme 1'},
            {id: 2, name:'Theme 2'},
            {id: 3, name:'Theme 3'}
        ],
        initiatives: [
            {id: 1, name:'Initiative 1', themeId: 1},
            {id: 2, name:'Initiative 2', themeId: 2},
            {id: 4, name:'Initiative 3', themeId: 2},
            {id: 6, name:'Initiative 4', themeId: 2},
            {id: 3, name:'Initiative 5', themeId: 3},
            {id: 5, name:'Initiative 6', themeId: 3}
        ],
        epics: [
            {
                id: 1,
                name: 'First Epic',
                details: '1 Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos quod.',
                initiativeId: 1,
                done: false
            },
            {
                id: 2,
                name: 'Second Epic',
                details: '2 Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos quod.',
                initiativeId: 2,
                storyId: 2,
                done: false
            },
            {
                id: 3,
                name: 'Third Epic',
                details: '3 Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos quod.',
                initiativeId: 3,
                storyId: 3,
                done: false
            }
            ,
            {
                id: 4,
                title: 'Second Epic',
                details: '2 Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos quod.',
                initiativeId: 1,
                storyId: 4,
                done: false
            }
        ],
        stories: [
            {
                id: 1,
                title:'First story Ipsum molestiae natus adipisci',
                description: 'Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a dolores quisquam quisquam adipisci possimus laboriosam.',
                assigneeId: 2,
                reporter: 1,
                storyPoints: 3,
                priority: 'high',
                epicId: 1,
                status: 0,
                sprint: 'none'
            },
            {
                id: 2,
                title:'Second story Ipsum molestiae natus adipisci',
                description: 'Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a dolores quisquam quisquam adipisci possimus laboriosam.',
                assigneeId: 1,
                reporter: 1,
                storyPoints: 3,
                priority: 'medium',
                epicId: 2,
                status: 0,
                sprint: 'none'
                
            },
            {
                id: 3,
                title:'Third story Ipsum molestiae natus adipisci',
                description: 'Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a dolores quisquam quisquam adipisci possimus laboriosam.',
                assigneeId: 1,
                reporter: 1,
                storyPoints: 3,
                priority: 'medium',
                epicId: 2,
                status: 0,
                sprint: 'none'
            },
            {
                id: 4,
                title:'Fourth story Ipsum molestiae natus adipisci',
                description: 'Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a dolores quisquam quisquam adipisci possimus laboriosam.',
                assigneeId: 1,
                reporter: 1,
                storyPoints: 3,
                priority: 'medium',
                epicId: 1,
                status: 0,
                sprint: 'none'
            },
            {
                id: 5,
                title:'Fifth story Ipsum molestiae natus adipisci',
                description: 'Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a dolores quisquam quisquam adipisci possimus laboriosam.',
                assigneeId: 1,
                reporter: 1,
                storyPoints: 3,
                priority: 'medium',
                epicId: 1,
                status: 0,
                sprint: 'none'
            }
        ],
        users: [
            {
                id: 1,
                name: 'Michelle Vu',
                initials: 'MV'
            },
            {
                id: 2,
                name: 'Harry Potter',
                initials: 'HP'
            },
            {
                id: 3,
                name: 'Hermione Granger',
                initials: 'HG'
            },
            {
                id: 4,
                name: 'Ron Weasley',
                initials: 'RW'
            }
        ],

        sprint: [
            {
                id: 1,
                name: 'Backlog'
            },
            {
                id: 2,
                name: 'Prioritize Backlog'
            },
            {
                id: 3,
                name: 'Goblet of Fire'
            },
            {
                id: 4,
                name: 'Sorcere\'s Stone'
            }
        ]

      };

    return (myInitialState)
}



