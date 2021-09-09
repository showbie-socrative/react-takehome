import { rest } from 'msw';

const fakeRooms = [
    { id: 111, name: 'Science 10'},
    { id: 234, name: 'Math 20'},
    { id: 411, name: 'Calculus 20'},
    { id: 412, name: 'Calculus 30'}
];

const fakeStudents = {
    '111': [
        {
            id: 111,
            name: 'Rachel P'
        },
        {
            id: 234,
            name: 'Sean R'
        }, 
        {
            id: 235,
            name: 'Shaun S'
        },
        {
            id: 411,
            name: 'Robin P'
        },      
        {
            id: 412,
            name: 'Henry T'
        }, 
        {
            id: 413,
            name: 'Jeff N'
        },
        {
            id: 505,
            name: 'Rajiv V'
        }
    ],
    '234': [],
    '411': [
        {
            id: 111,
            name: 'Rachel P'
        },
        {
            id: 222,
            name: 'Cam W'
        }
    ], 
    '412': [
        {
            id: 235,
            name: 'Shaun S'
        },
        {
            id: 411,
            name: 'Robin P'
        },      
        {
            id: 412,
            name: 'Henry T'
        }, 
        {
            id: 413,
            name: 'Jeff N'
        },
        {
            id: 420,
            name: 'Colin B'
        },
        {
            id: 555,
            name: 'Nadine F'
        }  
    ]
};

export const handlers = [
    rest.get('/rooms', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({ rooms: fakeRooms }),
          )
    }),
    rest.get('/rooms/:id/students', (req, res, ctx) => {
        const roomId = req.params.id;
        return res(
            ctx.status(200),
            ctx.json({
              students: fakeStudents[roomId],
            }),
          )
    }),
    rest.post('/rooms/:id/students', (req, res, ctx) => {
        const roomId = req.params.id;
        const name = req.body.name;

        if (!name) {
            return res(ctx.status(400));
        } else {
            return res(
                ctx.status(200),
                ctx.json({
                    id: Date.now(),
                    name: name,
                }),
              )
        }
    })
  ]