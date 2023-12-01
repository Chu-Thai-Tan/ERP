export const loginApi = (profile: { username: string; password: string }) => {
  return new Promise<{ data: object }>(resolve =>
    setTimeout(() => {
      resolve({ data: { name: 'Chu Thai Tan', age: 18 } });
    }, 3000),
  );
};
