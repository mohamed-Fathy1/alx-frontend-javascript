export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (err) {
    queue.push(`${err}`.split('\n')[0]);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
