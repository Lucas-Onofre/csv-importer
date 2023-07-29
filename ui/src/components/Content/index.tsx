import React, { useContext, useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import { User } from '../../types/User'

import { AppContext } from '../../contexts/AppContext'
import { apiServices } from '../../services/api-services'

import { ContentWrapper, CardListWrapper } from './styles'

import { Card } from '../Card'

export const Content = () => {
  const { csvFile, updateCsvFile } = useContext(AppContext)

  const [searchQuery, setSearchQuery] = useState<string>('')
  const { data, refetch } = useQuery<User[]>({queryKey: ['users', searchQuery], queryFn: async () => await apiServices.listUsers(searchQuery), staleTime: 1000 })

  const handleChangeSearchQuery = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(event.target.value)
  }

  useEffect(() => {
    if(csvFile) {
      handleImportCSV(csvFile)
    }
  }, [csvFile])

  const handleImportCSV = async (file: File): Promise<void> => {
    await apiServices.importCSV(file)
    refetch()
    updateCsvFile(null)
  }

  return (
    <ContentWrapper>
      <input type="text" placeholder="Search by name" value={searchQuery} onChange={handleChangeSearchQuery} />

      <CardListWrapper>
        {data?.map((user) => {
          return (
            <Card key={user.id} user={user}/>
          )
        })}
      </CardListWrapper>
    </ContentWrapper>
  )
}