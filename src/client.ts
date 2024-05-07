import express from 'express';
import { Connection, Client } from '@temporalio/client';
import { example } from './workflows';
import { nanoid } from 'nanoid';

const app = express();
const port = 3009;

app.get('/', async (req, res) => {
  const url = req.query.url as string;

  // Connect to the default Server location
  const connection = await Connection.connect({ address: 'localhost:7233' });
  const client = new Client({ connection });

  const handle = await client.workflow.start(example, {
    taskQueue: 'Web-Scrap-Queue',
    args: [url], // Pass the URL as the first argument to the workflow
    workflowId: 'workflow-' + nanoid(),
  });
  console.log(`Started workflow ${handle.workflowId}`);

  // Wait for the workflow to complete
  const result = await client.workflow.result(handle.workflowId);

  // Send the response back to the client
  res.send(JSON.stringify(result));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
