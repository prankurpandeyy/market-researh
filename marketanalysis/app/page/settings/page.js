"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  const [realTimeScraping, setRealTimeScraping] = useState(false)
  const [refreshInterval, setRefreshInterval] = useState(60)

  const handleSaveChanges = () => {
    // Implement save logic here
    console.log("Settings saved")
  }

  return (
    <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Settings</h1>

      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">API Configuration</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="amazon-api-key">Amazon API Key</Label>
            <Input id="amazon-api-key" placeholder="Enter Amazon API Key" />
          </div>
          <div>
            <Label htmlFor="flipkart-api-key">Flipkart API Key</Label>
            <Input id="flipkart-api-key" placeholder="Enter Flipkart API Key" />
          </div>
          <div>
            <Label htmlFor="google-api-key">Google API Key</Label>
            <Input id="google-api-key" placeholder="Enter Google API Key" />
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Preferences</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="real-time-scraping">Enable Real-time Scraping</Label>
            <Switch id="real-time-scraping" checked={realTimeScraping} onCheckedChange={setRealTimeScraping} />
          </div>
          <div>
            <Label htmlFor="refresh-interval">Refresh Interval (minutes)</Label>
            <Input
              id="refresh-interval"
              type="number"
              value={refreshInterval}
              onChange={(e) => setRefreshInterval(Number.parseInt(e.target.value))}
              min={1}
            />
          </div>
        </div>
      </div>

      <Button onClick={handleSaveChanges}>Save Changes</Button>
    </div>
  )
}

