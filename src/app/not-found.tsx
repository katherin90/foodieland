import Button from '@/components/ui/button/button'
 
export default function NotFound() {
  return (
    <div className='not-found'>
      <h2>Error 404</h2>
      <p>Could not find requested resource</p>
      <Button title='Return Home' url='/'/>
    </div>
  )
} 