///////// TEMPLATE /////////

///////// Stimuli /////////

///////// Start Game /////////
var forms = {
  type: 'action',
  id: 'form', // you can change the name of this form to whatever
  stimuli: [
    {
      type: 'form',
      parameters: {
        questions: [
          { name: 'id', type: "text", questionText: "Participant ID" },
          { name: 'gender', type: "dropdown", options: ["female", "male", "other"], questionText: "Participant Gender" },
          { name: 'age', type: "dropdown", options: ["4", "5", "6"], questionText: "Participant Age" },
        ],
      }
    }
  ]
}
var startGame = [
  {
    type: 'action',
    id: 'startGame',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/sample/start.jpeg',
          coordinates: [
            { value: 'started', shape: "rect", coordinates: "0, 0, 5000, 5000" },
          ]
        },
      }
    ]
  },
]

///////// Animal Task /////////
var animalTask = [
  // first list the stimuli you want to randomize. I've listed two movies.
  {
    type: 'action',
    id: 'animaltask1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/animaltask1.mp4',
          coordinates: [
            { value: 'dummy', shape: "rect", coordinates: "0, 0, 5000, 5000" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'animaltask2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/animaltask2.mp4', // type the location of the movie
          coordinates: [
            { value: 'dummy', shape: "rect", coordinates: "0, 0, 5000, 5000" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'animaltask3',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/animaltask3.mp4', // movie
          coordinates: [
            { value: 'dummy', shape: "rect", coordinates: "0, 0, 5000, 5000" },
          ]
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'animaltask4',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/animaltask4.mp4', // image
        }
      }
    ]
  },
]

///////// Main Induction Task /////////
var intro_k = [
  {
    type: 'action',
    id: 'attn_check1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/introduction_k1.mp4',
          coordinates: [
            { value: 'dummy', shape: "rect", coordinates: "0, 0, 5000, 5000" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'attn_check2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/introduction_k2.mp4',
          coordinates: [
            { value: 'dummy', shape: "rect", coordinates: "0, 0, 5000, 5000" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'intro_k_end',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/introduction_k3.mp4',
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'manipulation_check1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/manipulationcheck1.mp4',
          coordinates: [
            { value: 'correct', shape: "rect", coordinates: "0, 0, 799, 5000" },
            { value: 'wrong', shape: "rect", coordinates: "800, 0, 5000, 5000" },
          ]
        },
      }
    ]
  },
  {
    type: 'conditional',
    id: 'manipulation_check1',
    items: {
      'correct': [
        {
          type: 'action',
          id: 'manipulation_check1',
          stimuli: [
            {
              type: 'movie',
              parameters: {
                filename: '../../../assets/movie/manipulationcheck1_k_correct.mp4',
              }
            }
          ]
        }
      ],
      'wrong': [
        {
          type: 'action',
          id: 'manipulation_check1',
          stimuli: [
            {
              type: 'movie',
              parameters: {
                filename: '../../../assets/movie/manipulationcheck1_k_wrong.mp4',
              }
            }
          ]
        }
      ],
    }
  },
  {
    type: 'action',
    id: 'manipulation_check2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/manipulationcheck2.mp4',
          coordinates: [
            { value: 'correct', shape: "rect", coordinates: "0, 0, 799, 5000" },
            { value: 'wrong', shape: "rect", coordinates: "800, 0, 5000, 5000" },
          ]
        },
      }
    ]
  },
  {
    type: 'conditional',
    id: 'manipulation_check2',
    items: {
      'correct': [
        {
          type: 'action',
          id: 'manipulation_check2',
          stimuli: [
            {
              type: 'movie',
              parameters: {
                filename: '../../../assets/movie/manipulationcheck2_k_correct.mp4',
              }
            }
          ]
        }
      ],
      'wrong': [
        {
          type: 'action',
          id: 'manipulation_check2',
          stimuli: [
            {
              type: 'movie',
              parameters: {
                filename: '../../../assets/movie/manipulationcheck2_k_wrong.mp4',
              }
            }
          ]
        }
      ],
    }
  },
  {
    type: 'action',
    id: 'manipulation_check1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/manipulation_transition_k.mp4',
        },
      }
    ]
  }
]
var intro_nk = [
  {
    type: 'action',
    id: 'attn_check1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/introduction_nk1.mp4',
          coordinates: [
            { value: 'dummy', shape: "rect", coordinates: "0, 0, 5000, 5000" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'attn_check2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/introduction_nk2.mp4',
          coordinates: [
            { value: 'dummy', shape: "rect", coordinates: "0, 0, 5000, 5000" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'intro_k_end',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/introduction_nk3.mp4',
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'manipulation_check1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/manipulationcheck1.mp4',
          coordinates: [
            { value: 'wrong', shape: "rect", coordinates: "0, 0, 799, 5000" },
            { value: 'correct', shape: "rect", coordinates: "800, 0, 5000, 5000" },
          ]
        },
      }
    ]
  },
  {
    type: 'conditional',
    id: 'manipulation_check1',
    items: {
      'correct': [
        {
          type: 'action',
          id: 'manipulation_check1',
          stimuli: [
            {
              type: 'movie',
              parameters: {
                filename: '../../../assets/movie/manipulationcheck1_nk_correct.mp4',
              }
            }
          ]
        }
      ],
      'wrong': [
        {
          type: 'action',
          id: 'manipulation_check1',
          stimuli: [
            {
              type: 'movie',
              parameters: {
                filename: '../../../assets/movie/manipulationcheck1_nk_wrong.mp4',
              }
            }
          ]
        }
      ],
    }
  },
  {
    type: 'action',
    id: 'manipulation_check2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/manipulationcheck2.mp4',
          coordinates: [
            { value: 'wrong', shape: "rect", coordinates: "0, 0, 799, 5000" },
            { value: 'correct', shape: "rect", coordinates: "800, 0, 5000, 5000" },
          ]
        },
      }
    ]
  },
  {
    type: 'conditional',
    id: 'manipulation_check2',
    items: {
      'correct': [
        {
          type: 'action',
          id: 'manipulation_check2',
          stimuli: [
            {
              type: 'movie',
              parameters: {
                filename: '../../../assets/movie/manipulationcheck2_nk_correct.mp4',
              }
            }
          ]
        }
      ],
      'wrong': [
        {
          type: 'action',
          id: 'manipulation_check2',
          stimuli: [
            {
              type: 'movie',
              parameters: {
                filename: '../../../assets/movie/manipulationcheck2_nk_wrong.mp4',
              }
            }
          ]
        }
      ],
    }
  },
  {
    type: 'action',
    id: 'manipulation_check1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/manipulation_transition_nk.mp4',
        },
      }
    ]
  }
]

var pizza = [
  {
    type: 'action',
    id: 'pizza_zarpie',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/pizza_zarpie.mp4',
          coordinates: [
            { value: 'dummy', shape: "rect", coordinates: "0, 0, 5000, 5000" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'pizza_gorp',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/pizza_gorp.mp4',
          coordinates: [
            { value: 'dummy', shape: "rect", coordinates: "0, 0, 5000, 5000" },
          ]
        },
      }
    ]
  },
  {
    type: 'control',
    shuffle: true,
  }
]
var pizza_k = [
  {
    type: 'action',
    id: 'pizza_zarpie',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/pizza_zarpie_k.mp4',
        },
      }
    ]
  },
  pizza
]
var pizza_nk = [
  {
    type: 'action',
    id: 'pizza_zarpie',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/pizza_zarpie_nk.mp4',
        },
      }
    ]
  },
  pizza
]

var piano = [
  {
    type: 'action',
    id: 'piano_zarpie',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/piano_zarpie.mp4',
          coordinates: [
            { value: 'dummy', shape: "rect", coordinates: "0, 0, 5000, 5000" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'piano_gorp',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/piano_gorp.mp4',
          coordinates: [
            { value: 'dummy', shape: "rect", coordinates: "0, 0, 5000, 5000" },
          ]
        },
      }
    ]
  },
  {
    type: 'control',
    shuffle: true,
  }
]
var piano_k = [
  {
    type: 'action',
    id: 'piano_zarpie',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/piano_zarpie_k.mp4',
        },
      }
    ]
  },
  piano
]
var piano_nk = [
  {
    type: 'action',
    id: 'piano_zarpie',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/piano_zarpie_nk.mp4',
        },
      }
    ]
  },
  piano
]

var paint = [
  {
    type: 'action',
    id: 'paint_zarpie',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/paint_zarpie.mp4',
          coordinates: [
            { value: 'dummy', shape: "rect", coordinates: "0, 0, 5000, 5000" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'paint_gorp',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/paint_gorp.mp4',
          coordinates: [
            { value: 'dummy', shape: "rect", coordinates: "0, 0, 5000, 5000" },
          ]
        },
      }
    ]
  },
  {
    type: 'control',
    shuffle: true,
  }
]
var paint_k = [
  {
    type: 'action',
    id: 'paint_zarpie',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/paint_zarpie_k.mp4',
        },
      }
    ]
  },
  paint
]
var paint_nk = [
  {
    type: 'action',
    id: 'paint_zarpie',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/paint_zarpie_nk.mp4',
        },
      }
    ]
  },
  paint
]

var photo = [
  {
    type: 'action',
    id: 'photo_zarpie',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/photo_zarpie.mp4',
          coordinates: [
            { value: 'dummy', shape: "rect", coordinates: "0, 0, 5000, 5000" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'photo_gorp',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/photo_gorp.mp4',
          coordinates: [
            { value: 'dummy', shape: "rect", coordinates: "0, 0, 5000, 5000" },
          ]
        },
      }
    ]
  },
  {
    type: 'control',
    shuffle: true,
  }
]
var photo_k = [
  {
    type: 'action',
    id: 'photo_zarpie',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/photo_zarpie_k.mp4',
        },
      }
    ]
  },
  photo
]
var photo_nk = [
  {
    type: 'action',
    id: 'photo_zarpie',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/photo_zarpie_nk.mp4',
        },
      }
    ]
  },
  photo
]

var transition1_k = [
  {
    type: 'action',
    id: 'end',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/transition1_k.mp4',
        },
      }
    ]
  },
]
var transition1_nk = [
  {
    type: 'action',
    id: 'end',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/transition1_nk.mp4',
        },
      }
    ]
  },
]

///////// General Pragmatics Task /////////
var pragmatics = [
  {
    type: 'action',
    id: 'pragmatics1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/pragmatics1.mp4',
          coordinates: [
            { value: 'dummy', shape: "rect", coordinates: "0, 0, 5000, 5000" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'pragmatics2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/pragmatics2.mp4',
          coordinates: [
            { value: 'dummy', shape: "rect", coordinates: "0, 0, 5000, 5000" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'pragmatics3',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/pragmatics3.mp4',
          coordinates: [
            { value: 'dummy', shape: "rect", coordinates: "0, 0, 5000, 5000" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'pragmatics4',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/pragmatics4.mp4',
          coordinates: [
            { value: 'dummy', shape: "rect", coordinates: "0, 0, 5000, 5000" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'pragmatics5',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/pragmatics5.mp4',
          coordinates: [
            { value: 'dummy', shape: "rect", coordinates: "0, 0, 5000, 5000" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'pragmatics6',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/pragmatics6.mp4',
          coordinates: [
            { value: 'dummy', shape: "rect", coordinates: "0, 0, 5000, 5000" },
          ]
        },
      }
    ]
  }
]

///////// End! /////////
var end = [
  {
    type: 'action',
    id: 'end',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/end.mp4',
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'form',
    stimuli: [
      {
        type: 'form',
        parameters: {
          questions: [
            { name: 'comments', type: "text", questionText: "Experimenter ID" },
            { name: 'noise', type: "dropdown", options: ["No noise", "A little noisy", "Noisy", "Very noisy"], questionText: "Please rate the noise level." },
            { name: 'noise_engagement', type: "dropdown", options: ["No", "A little", "A lot"], questionText: "Did the noise effect the child's engagement?" },
            { name: 'attentive', type: "dropdown", options: ["Attentive/Excited", "Attentive", "Distracted", "Not paying attention"], questionText: "How attentive was the child?" },
          ]
        }
      }
    ]
  }
]

///////// The Conditions /////////

var knowledge_zarpie = [
  forms,
  startGame,
  animalTask,
  intro_k,
  [
    pizza_k,
    piano_k,
    {
      type: 'control',
      shuffle: true
    }
  ],
  transition1_k,
  [
    paint_k,
    photo_k,
    {
      type: 'control',
      shuffle: true
    }
  ],
  pragmatics,
  end
];

var noknowledge_zarpie = [
  forms,
  startGame,
  animalTask,
  intro_nk,
  [
    pizza_nk,
    piano_nk,
    {
      type: 'control',
      shuffle: true
    }
  ],
  transition1_nk,
  [
    paint_nk,
    photo_nk,
    {
      type: 'control',
      shuffle: true
    }
  ],
  pragmatics,
  end
];


///////// The Study /////////
// This is the study block
// Here is where you list which conditions to include in the study,
// the name of the study, and the last thing that happens in the study

export const Project = {
  conditions: [ // list all of your conditions here. Participants are randomly assigned to one of them
    knowledge_zarpie,
    noknowledge_zarpie,
    // knowledge_gorp,
    // noknowledge_gorp
  ],
  name: "PiDi2", // Put the name of your study here
  ended: { // this what happens when your study ends i.e., the last thing that happens before the study restarts
    // right now, I have it set to play a movie that says "Great job!"
    type: 'action',
    id: 'form', // you can change the name of this form to whatever
    stimuli: [
      {
        type: 'form',
        parameters: {
          questions: [
            { name: 'noise', type: "text", questionText: "If inattentive, when did the child stop paying attention?" },
            { name: 'errors', type: "text", questionText: "Any experimenter errors? If so, explain." },
            { name: 'comments', type: "text", questionText: "Any comments?" },
          ],
        }
      }
    ]
  }
}
