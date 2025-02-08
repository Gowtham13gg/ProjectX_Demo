import React, { type FC, useState } from 'react'
import { Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useNavigate } from 'react-router-dom'

interface PublishGatewayProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  domain: string;
  subdomain: string;
  action: string;
  apiUri: string;
}

export const PublishGateway: FC<PublishGatewayProps> = ({ 
  isDarkMode, 
  setIsDarkMode,
  domain,
  subdomain,
  action,
  apiUri
}) => {
  const navigate = useNavigate();
  const [gateway, setGateway] = useState('tyk');
  const [consumer, setConsumer] = useState('mobile_app');
  const [provider, setProvider] = useState('loan');
  const [providerEndpoint, setProviderEndpoint] = useState('/loan/account');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare data model for API
    const apiData = {
      gateway: gateway,
      apiName: "SampleProject1",
      apiId: `${domain}_V1_${subdomain}`,
      action: "New",
      active: true,
      proxy: {
        listenPath: apiUri,
        targetUrl: "http://host.docker.internal:5155/routing"
      },
      customPaths: [{
        action: "New",
        path: action,
        method: "Get"
      }]
    };

    try {
      // Send data to API endpoint
      const response = await fetch('http://localhost:5155/routing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      // Show success popup with selected data and API response
      const message = `API Configuration Successfully Published!
      
      Domain: ${domain}
      Subdomain: ${subdomain}
      Action: ${action}
      API URI: ${apiUri}
      Gateway: ${gateway}
      Consumer: ${consumer}
      Provider: ${provider}
      Provider Endpoint: ${providerEndpoint}
      
      API Response:
      ${JSON.stringify(result, null, 2)}`;
      
      alert(message);
      navigate('/dashboard');
    } catch (error) {
      alert(`Failed to publish API configuration: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };
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
              <h2 className="text-xl font-bold text-gray-900 dark:text-blue-400 font-['Poppins']">API Designer -&gt; Create New API -&gt; Contract -&gt;Publish to Gateway</h2>
            </div>
            
            {/* Gateway Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-['Inter']">Select Gateway</label>
                  <select
                    value={gateway}
                    onChange={(e) => setGateway(e.target.value)}
                    className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="tyk">Tyk</option>
                    <option value="kong">Kong</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-['Inter']">Consumers</label>
                  <select
                    value={consumer}
                    onChange={(e) => setConsumer(e.target.value)}
                    className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="mobile_app">Mobile app</option>
                    <option value="internet_banking">Internet banking</option>
                    <option value="partner">Partner</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-['Inter']">Provider</label>
                  <select
                    value={provider}
                    onChange={(e) => setProvider(e.target.value)}
                    className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="loan">Loan</option>
                    <option value="casa">CASA</option>
                    <option value="credit_card">Credit Card</option>
                    <option value="debit_card">Debit Card</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-['Inter']">Provider endpoint</label>
                  <Input
                    type="text"
                    value={providerEndpoint}
                    onChange={(e) => setProviderEndpoint(e.target.value)}
                    className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              {/* Plugins Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Plugins</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg text-center">
                    <p className="text-blue-600 dark:text-blue-400">Auth</p>
                  </div>
                  <div className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg text-center">
                    <p className="text-blue-600 dark:text-blue-400">Transformer</p>
                  </div>
                  <div className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg text-center">
                    <p className="text-blue-600 dark:text-blue-400">rate limit</p>
                  </div>
                  <div className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg text-center">
                    <p className="text-blue-600 dark:text-blue-400">Custom</p>
                  </div>
                  <div className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg text-center">
                    <p className="text-blue-600 dark:text-blue-400">Custom</p>
                  </div>
                  <div className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg text-center">
                    <p className="text-blue-600 dark:text-blue-400">Custom</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-md transition-colors"
                >
                  Publish
                </Button>
              </div>
            </form>
            {/* Success message would be shown here */}
          </div>
        </main>
      </div>
    </div>
  )
}
