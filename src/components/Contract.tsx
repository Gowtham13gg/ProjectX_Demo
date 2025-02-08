import { type FC } from 'react'
import { Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useNavigate } from 'react-router-dom'

interface ContractProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export const Contract: FC<ContractProps> = ({ isDarkMode, setIsDarkMode }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gradient-to-br dark:from-gray-900 dark:to-blue-900 transition-colors">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md transition-colors">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-blue-400 font-['Poppins']">ProjectX</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <div className="flex flex-col items-end">
            <span className="text-xs text-gray-600 dark:text-gray-400 mb-0.5">Powered by</span>
            <span className="text-sm font-bold text-gray-800 dark:text-white tracking-wide">theapimasters.com</span>
          </div>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-64px)]">
        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 mb-8 border border-gray-200 dark:border-gray-700 transition-colors">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-blue-400 font-['Poppins']">API Designer -&gt; Create New API -&gt; Contract</h2>
            </div>
            
            {/* Contract Form */}
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-['Inter']">API URI</label>
                <Input
                  type="text"
                  value="/loan/account"
                  readOnly
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Request Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Request</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="px-4 py-3">Field Name</th>
                        <th className="px-4 py-3">Description</th>
                        <th className="px-4 py-3">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 dark:border-gray-600">
                        <td className="px-4 py-3 text-gray-800 dark:text-gray-200">accountNo</td>
                        <td className="px-4 py-3 text-gray-800 dark:text-gray-200">account number</td>
                        <td className="px-4 py-3 text-gray-800 dark:text-gray-200">string</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-600">
                        <td className="px-4 py-3 text-gray-800 dark:text-gray-200">name</td>
                        <td className="px-4 py-3 text-gray-800 dark:text-gray-200">Name</td>
                        <td className="px-4 py-3 text-gray-800 dark:text-gray-200">string</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Response Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Response</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="px-4 py-3">Field Name</th>
                        <th className="px-4 py-3">Description</th>
                        <th className="px-4 py-3">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 dark:border-gray-600">
                        <td className="px-4 py-3 text-gray-800 dark:text-gray-200">accountNo</td>
                        <td className="px-4 py-3 text-gray-800 dark:text-gray-200">account number</td>
                        <td className="px-4 py-3 text-gray-800 dark:text-gray-200">string</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-600">
                        <td className="px-4 py-3 text-gray-800 dark:text-gray-200">name</td>
                        <td className="px-4 py-3 text-gray-800 dark:text-gray-200">Name</td>
                        <td className="px-4 py-3 text-gray-800 dark:text-gray-200">string</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Sample Request */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Sample Request</h3>
                <pre className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm text-gray-800 dark:text-gray-200">
{`{
  "widget": {
    "debug": "on",
    "title": "Sample Konfabulator Widget",
    "name": {
      "@first": "Joe",
      "height": 500
    },
    "image": {
      "src": "Images/Sun.png",
      "name": "sun1",
      "hOffset": 250,
      "vOffset": 250,
      "alignment": "center"
    },
    "text": {
      "data": "Click Here",
      "size": 36,
      "style": "bold",
      "name": "text1",
      "hOffset": 250,
      "vOffset": 100,
      "alignment": "center",
      "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
  }
}`}
                  </code>
                </pre>
              </div>

              <div className="flex justify-end space-x-4">
                <Button
                  type="button"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
                  onClick={() => window.open('contract.pdf', '_blank')}
                >
                  Download contract
                </Button>
                <Button
                  type="button"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
                  onClick={() => navigate('/publish-gateway')}
                >
                  Publish to GW
                </Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}
