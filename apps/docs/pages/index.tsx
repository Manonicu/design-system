import type { NextPage } from 'next'
import Demo from '../components/Demo'
import { Button } from '@manon/ui'

const Home: NextPage = () => {
  return (
    <>
      <Demo title="Button Type">
        <Button>default btn</Button>
        <Button btnType="primary">primary btn</Button>
        <Button btnType="link">link btn</Button>
      </Demo>
      <Demo title="Default Button Size">
        <Button size="large">default btn：large</Button>
        <Button size="middle">default btn：middle</Button>
        <Button size="small">default btn：small</Button>
        <Button size="mini">default btn：mini</Button>
      </Demo>
      <Demo title="Primary Button Size">
        <Button btnType="primary" size="large">
          primary btn：large
        </Button>
        <Button btnType="primary" size="middle">
          primary btn：middle
        </Button>
        <Button btnType="primary" size="small">
          primary btn：small
        </Button>
        <Button btnType="primary" size="mini">
          primary btn：mini
        </Button>
      </Demo>
      <Demo title="Link Button Size">
        <Button btnType="link" size="large">
          link btn：large
        </Button>
        <Button btnType="link" size="middle">
          link btn：middle
        </Button>
        <Button btnType="link" size="small">
          link btn：small
        </Button>
        <Button btnType="link" size="mini">
          link btn：mini
        </Button>
      </Demo>
      <Demo title="Default Button Shape">
        <Button shape="round" size="large">
          default btn：round
        </Button>
        <Button shape="round" size="middle">
          default btn：round
        </Button>
        <Button shape="round" size="small">
          default btn：round
        </Button>
        <Button shape="round" size="mini">
          default btn：round
        </Button>
      </Demo>
      <Demo title="Primary Button Shape">
        <Button shape="round" btnType="primary" size="large">
          primary btn：round
        </Button>
        <Button shape="round" btnType="primary" size="middle">
          primary btn：round
        </Button>
        <Button shape="round" btnType="primary" size="small">
          primary btn：round
        </Button>
        <Button shape="round" btnType="primary" size="mini">
          primary btn：round
        </Button>
      </Demo>
      <Demo title="Button Disabled">
        <Button shape="round" disabled>
          default btn：disabled
        </Button>
        <Button disabled>default btn：disabled</Button>

        <Button shape="round" btnType="primary" disabled>
          primary btn：disabled
        </Button>
        <Button btnType="primary" disabled>
          primary btn：disabled
        </Button>
      </Demo>
      <Demo title="Button Block">
        <Button shape="round" block={true}>
          default btn：disabled
        </Button>
        <Button block={true}>default btn：disabled</Button>

        <Button shape="round" btnType="primary" block={true}>
          primary btn：disabled
        </Button>
        <Button btnType="primary" block={true}>
          primary btn：disabled
        </Button>
      </Demo>
    </>
  )
}

export default Home
