interface Props{
    name:string
}

export async function fetchByTitle({name}:Props) {
    const response = await fetch(`https://diarc-backend.vercel.app/projects/${name}`);
    const data = await response.json();
    return data;
  }