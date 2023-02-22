"use client"
import useSWR from 'swr';
import Select from 'react-select';

const fetchModels = () => fetch('/api/getEngines').then(res => res.json())

const ModelSelection = () => {
    const { data: models } = useSWR('models', fetchModels)
    const { data: model, mutate: setModel } = useSWR('model', {
        fallbackData: "text-davinci-003"
    })



  return (
    <div>
        <Select
        id="long-value-select"
        instanceId="long-value-select"
        className='mt-2'
        options={models?.modelOptions}
        defaultValue={model}
        placeholder={model}
        isSearchable
        menuPosition='fixed'
        classNames={{
            control: (state) => "bg-[#434654] border-[#434654]"
        }}
        onChange={(e) => setModel(e.value)}
        />
    </div>
  )
}

export default ModelSelection