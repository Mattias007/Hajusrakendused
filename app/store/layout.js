import App from '@/components/App'
import { StoreProvider } from '@/redux/StoreProvider'

export default function StoreLayout({ children }) {
    return (
      <StoreProvider >           
              <App>{children}</App>    
      </StoreProvider>
    )
  }